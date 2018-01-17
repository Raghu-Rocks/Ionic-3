import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

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
            console.log(this.navParams.data, 'about');
            this.lastRefreshed = this.navParams.data;            
            // console.log(typeof this.lastRefreshed, 'type');
            // console.log(this.navParams.data.length, 'about');
            // let lastCard:any = this.navParams.data.length - 1;
            // if(typeof(this.navParams.data) !== 'undefined' && !isNaN(lastCard)){
            //       // console.log(lastCard, 'lastCard', typeof lastCard);
            //       this.data = Object.entries(this.navParams.data[lastCard]);
            //       for (lastCard in this.data) {
            //             let val = this.data[lastCard];
            //                   console.log(val, 'value');
            //             if (val.indexOf('last_refreshed') != -1) {
                                    // this.lastRefreshed = val[1];
            //             }
            //       }
            //   console.log(this.lastRefreshed, 'data');
            // }
      }

}
