import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getGamesAmerica } from 'nintendo-switch-eshop';
import { RequestOptions } from './requestOptions.model'
import { Nintendo } from './nintendo.model'

/*
  Generated class for the NintendoEshopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NintendoEshopProvider {

  options: RequestOptions;

  constructor(public http: HttpClient) {
    console.log('Hello NintendoEshopProvider Provider');
  }

  getGamesAmerica(): any{
    return getGamesAmerica().then(data => {
      return data
      //return data.filter((element, index, array) => element.title.includes('Mario') ? element : false)
    })
  }

}
