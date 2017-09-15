import { Component, ViewChild, ElementRef, Output } from '@angular/core';
import { NavController, NavParams, MenuController, IonicPage, LoadingController } from 'ionic-angular';
import { PeopleServiceProvider} from '../../providers/people-service/people-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})

export class HomePage{
    @Output('card') card:any;
    @ViewChild ('dashboardChart') dashboardChart: ElementRef;
    public people: any;    public bgimg: any; profile:any; profileImage:any;
    screen: any;   state: boolean = false;
    baseURL = "https://expcloudapp.adobe.com/mca/api/v1/user/";
    data:any[] =[];
  constructor(
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
		this.navCtrl.push("AboutPage", this.people);
	}

  	fetchData(){
        this.storage.get('IMSIToken').then((val) => {
            let APIurl = this.baseURL + val;
            this.loadPeople(APIurl);
        });
	}

	ionViewCanEnter() {
		return new Promise((resolve, reject) => {
			this.storage.length().then((val) => {
				if (val > 0){
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

}
