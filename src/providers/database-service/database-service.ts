import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DatabaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseServiceProvider {

  private PATH = 'user/'

  constructor(public http: HttpClient,
    private db: AngularFireDatabase) {
    console.log('Hello DatabaseServiceProvider Provider');
  }

  getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => ({key: a .payload.key, ...a.payload.val()}))
      })
  }

  get(key: string){
    return this.db.object(this.PATH + key)
      .snapshotChanges()
      .map(a => {
        return { key: a.key, ...a.payload.val()};
      })
  }

  save(user: any){
    return new Promise((resolve, reject) => {
      if(user.key){
        this.db.object(this.PATH + user.key)
          .update({ ...user})
          .then(() => resolve())
          .catch((e) => reject())
      } else {
        this.db.list(this.PATH)
          .push({...user})
          .then((result: any) => resolve(result.key))
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key)
  }

}
