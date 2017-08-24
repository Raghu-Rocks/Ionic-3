import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import {NotificationProvider} from '../../providers/notification/notification';
import{MyApp} from '../../app/app.component';
// import { HomePage } from '../home/home';
/**
 * Generated class for the NotificationDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-notification-details',
  templateUrl: 'notification-details.html',
  providers: [NotificationProvider]
})
@IonicPage(
{
  name: 'NotificationDetailsPage'
}
)
export class NotificationDetailsPage {
public notify: any;
 myApp = MyApp;
  constructor(public navCtrl: NavController, public navParams: NavParams,public NotificationProvider: NotificationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationDetailsPage');
    this.loadPeople();
  }
 loadPeople(){
    this.NotificationProvider.load('https://expcloudapp.adobe.com/mca/api/v1/user/robin/alerts')
    .then(data => {
      this.notify = data.data;
      console.log(this.notify,'this.notify');
    });
    
  }
}
