import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../../home/home';
import * as c3 from 'c3';  

/**
 * Generated class for the DetailScreen1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-screen1',
  templateUrl: 'detail-screen1.html',
})
export class summary {
    public hero: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
// ngOnInit(){
 ngAfterViewInit(){
    this.hero = this.navParams.get("hero");
        c3.generate({
        bindto: "#dashboardChart",
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area'
        },
        // type: 'area',
        colors: {
          data1: '#ff0000', data2: '#ff9900'
      }
    },
        legend: {
            show: false
        }
    });
}

// goBack() {
//     this.navCtrl.pop();
// }
ionViewDidLoad() {
    console.log('ionViewDidLoad DetailScreen1Page');
  }
}
