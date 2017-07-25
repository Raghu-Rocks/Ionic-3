import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import D3JS from 'd3';
import C3JS from 'c3';

export type C3 = typeof C3JS;
export type D3 = typeof D3JS; 
/*
  Generated class for the C3providerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class C3providerProvider {

  constructor(public http: Http) {
    console.log('Hello C3providerProvider Provider');
  }

}
