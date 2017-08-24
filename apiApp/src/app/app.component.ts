import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HomePage } from '../pages/home/home';
// import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { AlertController } from 'ionic-angular';
import { Push,  PushToken } from '@ionic/cloud-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html',
  providers: [PeopleServiceProvider],
})
export class MyApp {

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
	public navCtrl:NavController;  
	public people: any;

	constructor(
		platform: Platform, 
		statusBar: StatusBar, 
		splashScreen: SplashScreen, 
		public push: Push,
		public peopleServiceProvider: PeopleServiceProvider, 
		public alertCtrl: AlertController,
		private iab: InAppBrowser,
		private storage: Storage,) {

		// this.loadPeople("assets/data.json"); //for testing this is local data
		this.checkingUserTokenForLogin(); // check user token then redirect to Home or Login
		this.fetchData(); // after userToken ckeck it will frtch data
		platform.ready().then(() => {    //   checking platform ready : cordova
			statusBar.styleDefault();
			splashScreen.hide();
			this.registerNotification();
			this.notification();
		});
	}
	checkingUserTokenForLogin(){
		this.storage.length().then((val) =>{
				this.tokenLength = val;
				// console.log('len=='+ this.tokenLength);
				// alert('length'+this.tokenLength);
					if(this.tokenLength > 0){
						// alert("You are logged in ");
						this.rootPage = HomePage;
							}else{
							// alert("Need To Login");
							this.rootPage = LoginPage;
						}
			});
			this.storage.get('IMSIToken').then((val) =>{
				this.authToken = val;
				console.log("tokenval=="+val +" "+ this.authToken);
			});
	}
	fetchData(){
		this.storage.get('IMSIToken').then((val) => {
			let APIurl = this.validateTokenURL + val;
			this.loadPeople(APIurl);
		});
	}
	onLogOut() {
	/* Logout Action */
		var logOutURL = this.logOutURLBase + this.authToken;
		var browser = this.iab.create(logOutURL, "_blank", "location=no,toolbar=no");
		browser.on('loadstop').subscribe((data) => {
			if (data.url.indexOf(this.logoutURLFormat) !== -1) {
				this.storage.clear(); 
				this.nav.push(LoginPage);
				browser.close();
			}
		});
	}

	openPage(page, data) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		console.log('test', page, data);
		this.nav.push(page, data);
	}

	loadPeople(url){
		// call back data from provider
			this.peopleServiceProvider.load( url)
			.then(data => {
				this.people = data[1];
				//  console.log(this.people,'this.people',data,'data');
				// this.processCard(this.people);
			});
	}
	public  registerNotification(){
		this.push.register().then((t: PushToken) => {
			return this.push.saveToken(t);
		}).then((t: PushToken) => {
			return t.token;
			// console.log('Token saved:', t.token);
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
	//   DMAAppSendToConsole(msg) {
	//     if (this.DMAAppDebug) {
	//         console.log("DMAApp:" + msg);
	//     }
	// }
}

