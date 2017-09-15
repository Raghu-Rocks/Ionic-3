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
data: any; profile:any; cards:any;
  constructor(public http: Http) {
    // console.log('Hello PeopleServiceProvider Provider');
  }
	  load(url) {
		// console.log('service 1', typeof(this.data), this.data );
		if (this.data) {
			if (typeof(this.data[0]) !== 'undefined' && typeof(this.data[1] !== 'undefined')  )  {
			// already loaded data
			// console.log('service 2', typeof(this.data), this.data );
			return Promise.resolve(this.data);
			}
		}
		// don't have the data yet
		return new Promise(resolve => {
			// console.log('service 3', typeof(this.data), this.data );
			// We're using Angular HTTP provider to request the data,
			// then on the response, it'll map the JSON data to a parsed JS object.
			// Next, we process the data and resolve the promise with the new data.
			this.http.get(url)
			.map(res => res.json())
			.subscribe(data => {
				this.profile = data.profile;
				this.cards = data.cards;
				this.data = [this.profile, this.cards];
				// console.log(typeof this.data, this.data, "data undef");
				if (this.data != null && typeof(this.data[0]) != "undefined" && typeof(this.data[1]) != "undefined") {
					// console.log(this.data, 'data set');
					window.localStorage.setItem( "DMAApp",  JSON.stringify(this.data));
				}
				resolve(this.data);
			});
		});
	}

}
