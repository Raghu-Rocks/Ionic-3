import { Component, ViewChild } from '@angular/core';
import { App,Platform, Nav, NavController, AlertController, Events } from 'ionic-angular';
import { Push } from '@ionic/cloud-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html',
  providers: [PeopleServiceProvider],
})
export class MyApp{

	@ViewChild(Nav) nav: Nav;
	DMAAppDebug = true;
	authToken:any;
	tokenLength:any;
	baseURL = "https://expcloudapp.adobe.com";
	validateTokenURL = this.baseURL + "/mca/api/v1/user/";
	logOutURLBase = this.baseURL + "/mca/auth/logout/";
	failureURLFormat = "/auth/failed/";
	logoutURLFormat = "/auth/logoutsuccess/";

	rootPage: any;
	people: any;

	public navCtrl:NavController;  

	constructor(
		public app: App,
		public platform: Platform, 
		public statusBar: StatusBar, 
		public splashScreen: SplashScreen, 
		public push: Push,
		public events: Events,
		public peopleServiceProvider: PeopleServiceProvider, 
		public alertCtrl: AlertController,
		private iab: InAppBrowser,
		private storage: Storage,) {
		// this.loadPeople("assets/json/data.json"); //for testing this is local data
		this.fetchData(null); // after userToken ckeck it will frtch data
		this.initializeApp();
  		this.events.subscribe('user:created', (token) => {
				// user and time are the same arguments passed in `events.publish(user, time)`
				this.fetchData(token); // after userToken ckeck it will frtch data			
				console.log('Welcome', token, 'at');
  		});
		this.checkingUserTokenForLogin(); // check user token then redirect to Home or Login
	}// constructor

	checkingUserTokenForLogin(){
		this.storage.length().then((val) =>{
				this.tokenLength = val;
				// console.log('len=='+ this.tokenLength);
				// alert('length'+this.tokenLength);
					if(this.tokenLength > 0){
						// alert("You are logged in ");
						this.rootPage = HomePage;
					}	
					else{
						// alert("Need To Login");
						this.rootPage = LoginPage;
					}
			});
			this.storage.get('IMSIToken').then((val) =>{
				this.authToken = val;
				// console.log("tokenval=="+val +" "+ this.authToken);
			});
	}
	fetchData(emittToken): any{
		this.storage.get('IMSIToken').then((val) => {
			let APIurl = this.validateTokenURL + val;
			console.log(val, 'val1');
			if (val === null) {
				console.log(val, 'val2')
				APIurl = this.validateTokenURL + emittToken;
			}
			this.loadPeople(APIurl);
		});
	}

	openPage(page, data) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		// console.log('test', page, data);
		this.nav.push(page, data);
	}

	loadPeople(url){
		// call back data from provider
		console.log("load people",url);
			this.peopleServiceProvider.load( url)
			.then(data => {
				this.people = data[1];
				//  console.log(this.people,'this.people',data,'data');
			});
	}
	notification(){
		this.push.rx.notification()
			.subscribe((msg) => {
			//  console.log('Push Notification Received: ' + msg);
			let alert = this.alertCtrl.create({
				title: msg.title,
				subTitle: msg.text,
				buttons: ['Ok']
			});
			alert.present();
			});
	}
	onLogOut() {
	/* Logout Action */
		var logOutURL = this.logOutURLBase + this.authToken;
		var browser = this.iab.create(logOutURL, "_blank", "location=no,toolbar=no");
		// this.nav.push(LoginPage);
		browser.on('loadstop').subscribe((data) => {
			if (data.url.indexOf(this.logoutURLFormat) !== -1) {
				this.storage.clear(); 
				this.app.getRootNav().setRoot(LoginPage);
				browser.close();
			}
		});
	}

	initializeApp() {
		this.platform.ready().then(() => {
            // this.notification(); // notification alert
			this.statusBar.styleDefault();
			// this.splashScreen.hide();			
			this.storage.length().then((val) =>{
				this.tokenLength = val;
					if(this.tokenLength > 0){
						setTimeout(() => {
							this.splashScreen.hide();
						}, 200);
					}else{
							this.splashScreen.hide();
					}
			});
		});
	}
}

