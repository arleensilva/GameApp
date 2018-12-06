import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';
import { GameDetailPage } from '../game-detail/game-detail';

/**
 * Generated class for the MyGamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-games',
  templateUrl: 'my-games.html',
})
export class MyGamesPage {

  user: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public db: DatabaseServiceProvider) {
    }
    
    ionViewDidLoad() {
      let userFirebase = this.afAuth.auth.currentUser
      this.db.get(userFirebase.uid).subscribe(data => {
        this.user = data
      })
      
    }

    openGameDetail(game){
      this.navCtrl.push(GameDetailPage, game)
    }
  
    isArray(value) {
      return value && typeof value === 'object' && value.constructor === Array;
    }

    remove(game){
      let gameFilter = this.user.games.filter(obj => obj.id != game.id)
      this.user.games = gameFilter
      this.db.save(this.user)
    }

}
