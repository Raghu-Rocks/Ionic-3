import { Component, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
// import { HomePage } from '../../home/home';
import * as c3 from 'c3';

/**
 * Generated class for the Card2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'card2-design',
  templateUrl: 'card2.html',
  providers: [PeopleServiceProvider]
})
export class Card2Page {

  @Input() hero2:any = PeopleServiceProvider;
  @Input('index') card_index:any;
  @Input('master') masterName: string;
  @ViewChild ('#dashboardCharts')dashboardChart: ElementRef;
    public data :any;
    public cardData : any;
    public cardDataArray:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public peopleServiceProvider: PeopleServiceProvider,
    private cdr: ChangeDetectorRef) {  }
ngAfterViewInit() {
//   console.log(this.card_index,'card_index1');
   // let dashboardChartArea = this.dashboardChart.nativeElement;
   this.mapjson ();this.donutdata();

    c3.generate({
        bindto: "#dashboardChart"+this.card_index,
        data: {
            type: 'donut',
            columns: this.cardDataArray,
        },
        legend: {
            show: false
        },
        size: {
        height: 120
    },
    donut: {
      width: 12
    }
    });
}

  navigateToDetailPage(){
    this.navCtrl.push("channels", this.hero2)
  //  console.log(this.hero2, "hero")
}

  mapjson (){
  this.data = Object.entries(this.hero2.collection[0]);
  
    // console.log("raghu =" + Object.entries(this.hero2.collection[0]));
    // debugger;
    let temp = Object.entries(this.data[2][1]);
    this.cardData = Object.entries(temp[0][1])[0][1];
    this.cardDataArray = Object.entries(this.cardData);
    // console.log(this.cardDataArray, "dataArray");
    this.cdr.detectChanges();
  }
  public element:any;
  donutdata(){
        for (var index = 0; index < this.cardDataArray.length; index++) {
          this.element = this.cardDataArray[index];
        }
        // console.log(this.element[0],this.element[1], "element");
        
  }
}
