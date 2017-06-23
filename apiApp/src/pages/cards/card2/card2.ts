import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
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
  
  @Input() hero2: PeopleServiceProvider;
  @Input('master') masterName: string;
  @ViewChild ('dashboardCharts')dashboardChart: ElementRef;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public peopleServiceProvider: PeopleServiceProvider) {
  }
ionViewDidLoad() {  
    let dashboardChartArea = this.dashboardChart.nativeElement;

    c3.generate({
        bindto: "#dashboardChart",
        data: {
            type: 'bar',
            columns: [
                ['Under 18', 50],
                ['Above 18', 50]
            ]
        },
        donut: {
            title: "Age"
        }
    });
}


  loadPeople(url){
  this.peopleServiceProvider.load(url)
  .then(data => {
        this.hero2= data;
        // console.log(this.hero,'this.hero',data,'data');
        // this.processCard(this.people);
  });
}
  navigateToDetailPage(){
    this.navCtrl.push("DetailScreen2Page", this.hero2)
    console.log(this.hero2, "hero")
  }

}
