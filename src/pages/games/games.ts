import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NintendoEshopProvider } from '../../providers/nintendo-eshop/nintendo-eshop';

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

  gameList: any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nintendoService:NintendoEshopProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
    this.getGameList();
  }

  getGameList(){
    this.nintendoService.getGamesAmerica()
      .then(data => this.gameList = data)
  }

}
