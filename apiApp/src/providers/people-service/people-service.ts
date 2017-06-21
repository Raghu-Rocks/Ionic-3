import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleServiceProvider {
data: any;
  constructor(public http: Http) {
    // console.log('Hello PeopleServiceProvider Provider');
  }
  load() {
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.

      //  this.http.get('https://api.myjson.com/bins/wrm37') first one
     //  this.http.get('https://api.myjson.com/bins/pnt27')
    // this.http.get('https://api.myjson.com/bins/1c3ukf')
    this.http.get('https://api.myjson.com/bins/dwd8f') //latest with detail screen

      .map(res => res.json())
      .subscribe(data => {
          this.data = data.columns;
          resolve(this.data);
      });
  });
}

}
