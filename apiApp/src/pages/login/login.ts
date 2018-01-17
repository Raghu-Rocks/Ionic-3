import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Events } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Push,  PushToken } from '@ionic/cloud-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{
  /* URLs */
  baseURLProd = "https://expcloudapp.adobe.com";
  baseURL = this.baseURLProd;
  /* Developement options */
  // baseURLDev = "https://or1010050204078.corp.adobe.com";
  //"DMADevEnv"
  DMADev = false;
  /* Creating URLs */
  authURL;
  tokenURLFormat = "/auth/success/#usertoken=";
  failureURLFormat = "/auth/failed/";
  logoutURLFormat = "/auth/logoutsuccess/";
  validateTokenURL = this.baseURL + "/mca/api/v1/user/";
  setDeviceIDURL = this.baseURL + "/mca/api/v1/user/";
  logOutURLBase = this.baseURL + "/mca/auth/logout/";
  output: any;
  IMSIToken: string;
  constructor(
    public events: Events,
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
	public push: Push,
	public http: Http,
    private storage: Storage) {
    // this.output = this.gettKey(this.DMADev);
	}
	getDataAfterLogin(token) {
		console.log('User created!')
		this.events.publish('user:created', token);
	}
	/*ionViewDidLoad is similar to onInit*/
	ionViewDidLoad(){
		/* Check for dev environment and set base URL */
		if (!this.gettKey(this.DMADev)) {
		this.baseURL = this.baseURLProd;
		} else {
		this.baseURL = this.baseURLProd;
		}
		this.authURL = this.baseURL + "/mca/auth/";
		// set base url in storage
	}
	gettKey(key) {
		// return this.storage.getItem(key);
	}
	DMAAppAuth() {
		console.log('AuthURL', this.authURL)
		// let value: any;
		const browser = this.iab.create(this.authURL, "_blank", "location=no,toolbar=no");
		browser.on('loadstop').subscribe((data) => {
		if (data.url.indexOf(this.tokenURLFormat) !== -1) {
			// set a key/value
			this.storage.set('IMSIToken', data.url.split(this.tokenURLFormat)[1]);
			this.registerNotification(data.url.split(this.tokenURLFormat)[1])
			this.navCtrl.setRoot("HomePage");
			this.IMSIToken = data.url.split(this.tokenURLFormat)[1];
			browser.close();
			this.getDataAfterLogin(this.IMSIToken);
		} 
		});
	}
  	registerNotification(passIMSIToken){
		this.push.register().then((t: PushToken) => {
			return this.push.saveToken(t);
		}).then((t: PushToken) => {
			console.log('Token saved on Login:', t.token);

				// post method for sending Device_Id
			let url  = "https://expcloudapp.adobe.com/mca/api/v1/user/"+ passIMSIToken +"/setDeviceDetails";
			let headers = new Headers({	'Content-Type' : 'application/x-www-form-urlencoded' });
			let options = new RequestOptions({ headers: headers });
			let body = 'device_id=' + t.token;

			return new Promise((resolve, reject) => {
				this.http.post(url, body, options)
				.toPromise()
				.then((response) =>
				{
					console.log('API Response : ', response.json());
					resolve(response.json());
				})
				.catch((error) =>
				{
					console.error('API Error : ', error.status);
					console.error('API Error : ', JSON.stringify(error));
					reject(error.json());
				});
			});
		});
	}
	
}

