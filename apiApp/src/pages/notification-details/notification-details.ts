import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import {NotificationProvider} from '../../providers/notification/notification';
import{MyApp} from '../../app/app.component';
import { Storage } from '@ionic/storage';


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
	baseURL = "https://expcloudapp.adobe.com";
	validateTokenURL = this.baseURL + "/mca/api/v1/user/";
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public NotificationProvider: NotificationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationDetailsPage');
    this.loadPeople();
  }
 loadPeople(){
   		this.storage.get('IMSIToken').then((val) => {
			let NotificationUrl = this.validateTokenURL + val + "/alerts";
      console.log(val, 'val1');
      console.log(NotificationUrl, 'val1');
      // this.NotificationProvider.load('https://expcloudapp.adobe.com/mca/api/v1/user/robin/alerts')
      this.NotificationProvider.load(NotificationUrl)
      .then(alertsData => {
        this.notify = alertsData.data;
        console.log(this.notify,'this.notify');
      });
		});
    
  }
}
