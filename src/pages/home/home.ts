import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {}
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: DatabaseServiceProvider,
    public afAuth: AngularFireAuth) {
      let userFirebase = afAuth.auth.currentUser
      db.get(userFirebase.uid).subscribe(data => {
        this.user = data
        console.log(this.user)
      })
  }

}
