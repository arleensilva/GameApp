import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';
import { GameDetailPage } from '../game-detail/game-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any = {}

  constructor(public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public db: DatabaseServiceProvider) {
    let userFirebase = afAuth.auth.currentUser
      db.get(userFirebase.uid).subscribe(data => {
        this.user = data
      })
  }

  updateFriendCode(event){
    this.user.fc = event.target.value
    this.db.save(this.user)
  }

  updateNickname(event){
    this.user.nick = event.target.value
    this.db.save(this.user)
  }

  openGameDetail(game){
    this.navCtrl.push(GameDetailPage, game)
  }
}
