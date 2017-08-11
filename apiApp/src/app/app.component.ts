import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HomePage } from '../pages/home/home';
import { AlertController } from 'ionic-angular';
import { Push,  PushToken } from '@ionic/cloud-angular';


@Component({
  templateUrl: 'app.html',
  providers: [PeopleServiceProvider],
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  // rootPage: string = 'NotificationPage';

  public navCtrl1: NavController;
  public people: any;
  //public navCtrl:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public push: Push,
    public peopleServiceProvider: PeopleServiceProvider, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.peopleServiceProvider.load("assets/data.json")
        .then(data => {
          this.people = data;
          //  console.log(this.people,'this.people',data,'data');
          // this.processCard(this.people);
        });
    });
    if (platform.is('cordova')) {
      // device only code
      this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
      });

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
    };

  }
  openPage(page, data) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log('test', page, data);
    this.nav.push(page, data);

  }


}

