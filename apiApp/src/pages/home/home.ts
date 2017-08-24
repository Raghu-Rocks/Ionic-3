import { Component, ViewChild, ElementRef, Output } from '@angular/core';
import { NavController, NavParams, MenuController, IonicPage } from 'ionic-angular';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';
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

  constructor(
          public navCtrl: NavController, 
          public navParams: NavParams,
          public peopleServiceProvider: PeopleServiceProvider,
          private storage: Storage,
          private socialSharing:SocialSharing,
          private screenshot: Screenshot,
          public menu: MenuController) {
            storage.get('IMSIToken').then((val) => {
                let APIurl = this.baseURL + val;
                this.loadPeople(APIurl);
            });
                // this.loadPeople("assets/data.json");
           
            
    }
  loadPeople(url:any){
    this.peopleServiceProvider.load(url)
    .then(data => {
           this.profile = data[0];
          this.people= data[1];
          // this.processCard(this.people);
        this.profile = Object.entries(this.profile);
      this.profileImage = Object.entries(this.profile[2]);
      this.profileImage = Object.values(this.profileImage[1])[1];
        // console.log(this.profileImage,'this.profile');
    });
  }
 
  navigateToAbout(){
      this.navCtrl.push("AboutPage", this.people);
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
