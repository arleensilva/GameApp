import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';
import { TabsPage } from '../tabs/tabs';

//import { DatabaseServiceProvider } from '../../providers/database-service/database-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginError: string;

  constructor(
    private navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider,
    private db: DatabaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  loginWithGoogle() {
    try {
      this.auth.signInWithGoogle().then( data => {
        if(data.additionalUserInfo.isNewUser){
          let newUser = { key: data.user.uid, name: data.user.displayName, email: data.user.email }
          this.db.save(newUser)
          this.navCtrl.setRoot(TabsPage, data)
        } else {
          this.navCtrl.setRoot(TabsPage, data)
          // this.db.get(data.user.uid).subscribe( user => {
          //   let endUser = { ...user, name: data.user.displayName, email: data.user.email };
          // })
        }
      });
    } catch (error) {
      alert(error.message)
      console.log(error.message)
    }
  } 

}
