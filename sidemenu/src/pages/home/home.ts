import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http/http';
import * as c3 from 'c3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HttpProvider]
})
export class HomePage {
  newsData: any;
  // loading: any;
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  
@ViewChild ('dashboardChart') dashboardChart: ElementRef;
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,  public httpProvider:HttpProvider, public loadingCtrl: LoadingController ) {
    // this.loading = this.loadingCtrl.create({
    //   content: `<ion-spinner></ion-spinner>`
    // });
    this.getdata();
  }
getdata(){
  this.httpProvider.getJsonData().subscribe(
    result => {
      this.newsData=result.data.children;
      console.log("Success : "+this.newsData);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}
  JsonData ={ "data1" :"15","data2":"160","data3":"30","data4":"40"};

ionViewDidLoad() {
    let dashboardChartArea = this.dashboardChart.nativeElement;

    c3.generate({
        bindto: dashboardChartArea,
    // data: {
    	url: '../../pages/home/c3Data.json',
    //     type : 'donut',
    // },
    data: {
        columns: [
            ['data1', 15],
            ['data2', 160],
            ['data3', 30],
            ['data4', 40],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "100%",
        label: {
            threshold: 0.05,
            //format: (value:number, ratio=0.5, id) => value +'' + ratio
        },
        // title: Math.round(percentage * 100),
        width: 25,
    
    }
  });
}
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }



}
