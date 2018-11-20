import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // site = {
  //   url: 'grokonez.com',
  //   description: 'Java Technology - Spring Framework'
  // };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase) {
      //this.db.list('site').push(this.site)
      console.log('teste')
      console.log(this.navParams.data)

  }

}
