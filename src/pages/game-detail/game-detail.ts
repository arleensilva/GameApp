import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nintendo } from '../../model/nintendo.model';

/**
 * Generated class for the GameDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html',
})
export class GameDetailPage {

  game: Nintendo;
  numberPlayers: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.game = navParams.data;
    console.log(this.game);
    this.numberPlayers = navParams.data.number_of_players.replace(/\D/g,'');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailPage');
  }

  isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

}
