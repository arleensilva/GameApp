import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NintendoEshopProvider } from '../../providers/nintendo-eshop/nintendo-eshop';
import { Nintendo } from '../../providers/nintendo-eshop/nintendo.model'
import { GameDetailPage } from '../game-detail/game-detail';

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


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nintendoService:NintendoEshopProvider) {
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

}
