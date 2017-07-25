import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as c3 from 'c3';  


@IonicPage()
@Component({
  selector: 'page-detail-screen1',
  templateUrl: 'detail-screen1.html',
})
export class summary {
    data:any;
    cardName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private cdr:ChangeDetectorRef) {
      this.navParams.get("hero");
  }

 ngAfterViewInit(){
        this.mapjson ();
        this.areaGraph();
    }


    mapjson (){
      // today
    this.data = Object.entries(this.navParams.data);
    this.cardName = Object.entries(this.data[0]);
    this.cdr.detectChanges();
}




    areaGraph(){
                c3.generate({
        bindto: "#dashboardChart",
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        },
        // type: 'area',
    //     colors: {
    //       data1: '#ff0000', data2: '#ff9900'
    //   }
    },
        legend: {
            show: false
        }
    });
    }
}
