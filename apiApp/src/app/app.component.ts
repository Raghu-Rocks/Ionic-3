import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PeopleServiceProvider} from '../providers/people-service/people-service';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html',
  providers: [PeopleServiceProvider],
  
  
})
export class MyApp {
@ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  public people:any;
  
 // @Input('card') people: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public peopleServiceProvider:PeopleServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.peopleServiceProvider.load("data.json")
  .then(data => {
        this.people= data;
        //  console.log(this.people,'this.people',data,'data');
        // this.processCard(this.people);
  });
    });
  }
 
  openPage(page,data) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log('test',page,data);
    this.nav.push(page,data);
    
  }
}

