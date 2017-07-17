import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
import * as c3 from 'c3';  

@IonicPage()
@Component({
  selector: 'card1-design',
  templateUrl: 'cards.html',
  providers: [PeopleServiceProvider]
})

export class Card1Page {
  
  @Input() hero: PeopleServiceProvider;
  @Input('master') masterName: string;
  @Input('index') card_index:string;
  @ViewChild ('#dashboardCharts')dashboardChart: ElementRef;

  constructor(public navCtrl: NavController, public peopleServiceProvider: PeopleServiceProvider, public navParams: NavParams) {
  }

ngAfterViewInit() {
//   console.log(this.card_index,'card_index1');
   // let dashboardChartArea = this.dashboardChart.nativeElement;

    c3.generate({
        bindto: "#dashboardChart"+this.card_index,
        data: {
            type: 'bar',
            columns: [
                ['data1', 180, 170, 180, 190, 170, 140, 170, 190, 76 ]
                // ['data2', 180, 170, 180, 180, 190, 190, 190, 190, 76 ]
            ],
           colors: {
            data1: '#F68B24'
            // data2: '#00ff00',
            },
        },
        legend: {
            show: false
        },
        size: {
        height: 80
        },
        axis: {
        x: {
            label: 'X Label',
            show: false
            },
        y: {
            label: 'Y Label',
            show: false
            }
        },
       bar: {
        width: {
            ratio: 0.9 // this makes bar width 50% of length between ticks
        }
       }
    });
}
//   loadPeople(url){
//   this.peopleServiceProvider.load(url)
//   .then(data => {
//         this.hero= data;
//         // console.log(this.hero, "hero");
//   });
// }
  navigateToDetailPage(hero){
    this.navCtrl.push("summary", hero);
    // console.log(this.hero, "hero");
  }
}
