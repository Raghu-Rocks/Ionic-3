import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
 data:any; card1:any; lastRefreshed:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit(){
        this.mapjson ();
    }
onRefresh(){
    // window.location.reload();
    // this.navCtrl.push("HomePage");
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.navCtrl.setRoot("HomePage");

}
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AboutPage');
  // }

      mapjson (){
        if (this.navParams.data.length < 5) {
              this.data = Object.entries(this.navParams.data);
              this.lastRefreshed = Object.entries(this.data[0][1])[3][1];
              // this.lastRefreshed = Object.values(this.card1);
              // console.log(this.lastRefreshed, 'data'); 
        }
        else if (this.navParams.data.length > 5){
              this.data = Object.entries(this.navParams.data);
              this.card1 = Object.entries(this.data[3][1]);
              this.lastRefreshed = Object.entries(this.card1)[1][1][1];
              // console.log(this.lastRefreshed, 'lastRefreshed'); 
          
        }

      }

}
