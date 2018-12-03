import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NintendoEshopProvider } from '../../providers/nintendo-eshop/nintendo-eshop';
import { Nintendo } from '../../model/nintendo.model'
import { GameDetailPage } from '../game-detail/game-detail';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  game: Nintendo[]=[];
  gameList: Nintendo[]=[];
  myInput: string;
  userFirebase: any
  user: any


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nintendoService:NintendoEshopProvider,
    public afAuth: AngularFireAuth,
    public db: DatabaseServiceProvider) {
      let userFirebase = afAuth.auth.currentUser
      db.get(userFirebase.uid).subscribe(data => this.user = data)
  }

  ionViewDidLoad() {
    this.getGameList();
  }

  onInput(event){
    if (this.myInput != '')
      this.gameList = this.game.filter((element, index, array) => element.title.toLocaleUpperCase().includes(this.myInput.toLocaleUpperCase()) ? element : false)
      else {
        this.gameList = [];
        this.randomGame();
      }
  }

  randomGame(){
    for(let i= 0; i < 10; i++){
      this.gameList.push(this.game[Math.trunc(Math.random()*this.game.length)])
    }
  }

  getGameList(){
    this.nintendoService.getGamesAmerica()
      .then(data => {
        this.game = data;
        this.randomGame();
      })
  }

  openGameDetail(game){
    this.navCtrl.push(GameDetailPage, game)
  }

  isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

  addMyGame(game){
    if(!this.user.games){
      this.user.games = []
    }
    this.user.games.push(game)
    this.db.save(this.user)
    console.log('salvou')
  }

}
