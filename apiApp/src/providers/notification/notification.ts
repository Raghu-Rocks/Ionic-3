import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NotificationProvider {
public alertsData:any;
  constructor(public http: Http) {
    console.log('Hello NotificationProvider Provider');
  }
load(url) {
  if (this.alertsData) {
    // already loaded data
    return Promise.resolve(this.alertsData);
  }

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
       
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.alertsData = data;
         console.log(data,'data');
        resolve(this.alertsData);
       
      });
  });
}
}
