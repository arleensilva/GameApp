import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {nome: 'teste'}

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: DatabaseServiceProvider) {
      db.save(this.user)
      console.log('teste')
      console.log(this.navParams.data)

  }

}
