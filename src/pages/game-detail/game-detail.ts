import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nintendo } from '../../providers/nintendo-eshop/nintendo.model';

/**
 * Generated class for the GameDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html',
})
export class GameDetailPage {

  game: Nintendo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.game = navParams.data;
    //console.log(JSON.stringify(this.game, null, 2))
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailPage');
  }

  isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

}
