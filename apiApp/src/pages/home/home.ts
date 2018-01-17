import { Component, ViewChild, ElementRef, Output } from '@angular/core';
import { App, NavController, NavParams, MenuController, IonicPage, LoadingController } from 'ionic-angular';
import { PeopleServiceProvider} from '../../providers/people-service/people-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})

export class HomePage{
    @Output('card') card:any;
    @ViewChild ('dashboardChart') dashboardChart: ElementRef;
    public people: any;    public bgimg: any; profile:any; profileImage:any; error:any;
    screen: any;   state: boolean = false;
    // baseURL = "https://expcloudapp.adobe.com/mca/api/v1/user/";
    data:any[] =[];
	  baseURL = "https://expcloudapp.adobe.com";
	  validateTokenURL = this.baseURL + "/mca/api/v1/user/";
	  logOutURLBase = this.baseURL + "/mca/auth/logout/";
	  failureURLFormat = "/auth/failed/";
	  logoutURLFormat = "/auth/logoutsuccess/";
    authToken: any;


  constructor(
        private app: App,
        private iab: InAppBrowser,
	  	  public loadingCtrl: LoadingController,
        public navCtrl: NavController, 
        public navParams: NavParams,
        public peopleServiceProvider: PeopleServiceProvider,
        private storage: Storage,
        private socialSharing:SocialSharing,
        private screenshot: Screenshot,
        public menu: MenuController) {
		    // this.loadPeople("assets/json/data.json");
			// this.offlineData();
            this.fetchData();
	}
		
	ionViewDidLoad(){
   		this.presentLoading();
	}

	navigateToAbout(){
		// console.log(this.people[0].last_refreshed, 'home.ts about')
		this.navCtrl.push("AboutPage", this.people[0].last_refreshed);
	}

  	fetchData(){
        this.storage.get('IMSIToken').then((val) => {
          this.authToken = val;
            let APIurl = this.validateTokenURL + this.authToken;
            this.loadPeople(APIurl);
        });
	}

	ionViewCanEnter() {
		return new Promise((resolve, reject) => {
			this.storage.length().then((val) => {
				if (val != -1){
					resolve(true);
				}
			}, 
			(err) => {
				reject(false);
			});
		});
	}

	loadPeople(url:any){
		this.peopleServiceProvider.load(url)
		.then(data => {
			this.profile = data[0];
			this.people= data[1];
			console.log(typeof this.profile, 'profile');
			if (this.profile) {
				this.userProfileData();
      }
      console.log(data[2], 'error', typeof data[2]);
			if ( typeof(data[2]) != "undefined" && data[2] !== undefined && (data[1] == undefined || typeof(data[1] == "undefined"))){
        console.log(data[2], 'data[2]');
        this.error = data[2];
        this.onLogOut();
			}
		});
	}

	userProfileData(){
		this.profile = Object.entries(this.profile);
		this.profileImage = Object.entries(this.profile[2]);
		this.profileImage = Object.values(this.profileImage[1])[1];
		// console.log(this.profileImage,'this.profile');
		// console.log(this.people,'this.profile');
	}

	offlineData(){
        this.data = JSON.parse( window.localStorage.getItem("DMAApp"));
        //   console.log(this.data, 'local data');
        this.profile = this.data[0];
        this.people= this.data[1];
        if (this.profile) {
            this.profile = Object.entries(this.profile);
            this.profileImage = Object.entries(this.profile[2]);
            this.profileImage = Object.values(this.profileImage[1])[1];
        	//   console.log(this.profileImage,'this.profile');
        }
         //   console.log(this.people,'this.profile');
	}
		
	presentLoading() {
		let loader = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 1500
		});
		loader.present();
	}



// screnshots and share plugin function
  // reset() {
  //   setTimeout(function(){ 
  //     this.state = false;
  //   }, 200);
  // }
  // screenShotURL() {
  //   this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
  //     this.screen = res.filePath;
  //     console.log(this.screen, 'path');
  //     this.state = true;
  //     this.reset();
  //   });
  // }

  shareSheetShare() {
    // this.screenShotURL() ;
      // this.screenshot.save('jpg', 100, "pic" +this.screenCount).then(res => {
      //   this.screen = res.filePath;
    this.screenshot.URI(80).then(res => {
      this.screen = res.URI;
      console.log(this.screen, 'path');
      // console.log(this.screen);
      this.socialSharing.share(null, null, this.screen, null).then(() => {
      console.log("shareSheetShare: Success");
      }).catch((Error) => {
      console.error("shareSheetShare: failed"+ Error);
    });

    });
    // console.log(this.screen, 'screen')

  }


  	onLogOut() {
	/* Logout Action */
		var logOutURL = this.logOutURLBase + this.authToken;
		var browser = this.iab.create(logOutURL, "_blank", "location=no,toolbar=no");
		// this.nav.push(LoginPage);
		browser.on('loadstop').subscribe((data) => {
			if (data.url.indexOf(this.logoutURLFormat) !== -1) {
				this.storage.clear(); 
				this.app.getRootNav().setRoot("LoginPage");
				browser.close();
			}
		});
	}

}
