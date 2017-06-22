import { Component, ViewChild, ElementRef } from '@angular/core';
import {  IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';
import { Card1Page } from '../../pages/cards/card1/cards';
import { Card2Page } from '../../pages/cards/card2/card2';
import * as c3 from 'c3';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})

export class HomePage {
  master = 'Master';
  public people: any;
  @ViewChild ('dashboardChart') dashboardChart: ElementRef;

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public peopleServiceProvider: PeopleServiceProvider,
    public menu: MenuController) {
        this.loadPeople();
    }



loadPeople(){
  this.peopleServiceProvider.load()
  .then(data => {
        this.people= data;
        // console.log(this.people,'this.people',data,'data');
        // this.processCard(this.people);
  });
}
ionViewDidLoad() {
    let dashboardChartArea = this.dashboardChart.nativeElement;
    

    c3.generate({
        bindto: dashboardChartArea,
    // data: {
    	// url: '../../pages/home/c3Data.json',
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
    legend: {
        show: false
    },
    donut: {
        title: "100%",
        label: {
            threshold: 0.06,
            //format: (value:number, ratio=0.5, id) => value +'' + ratio
        },
        // title: Math.round(percentage * 100),
        width: 25,
    
    }
  });
}


}
