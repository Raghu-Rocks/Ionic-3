import { Component, ViewChild, Input, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import * as c3 from 'c3';  

/**
 * Generated class for the DetailScreen2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-screen2',
  templateUrl: 'detail-screen2.html',
})
export class channels {
    @ViewChild(Slides) slides: Slides;
    @Input('index') card_index:any;
    @ViewChild ('#dashboardCharts')dashboardChart: ElementRef;
    public hero: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

// ngOnInit(){
 ngAfterViewInit(){
    this.slides.freeMode = true;
    this.hero = this.navParams.get("hero");
//   console.log(this.card_index,'card_index1');
   // let dashboardChartArea = this.dashboardChart.nativeElement;
//    console.log(this.card_index, "Card Index")
    c3.generate({
        bindto: "#dashboardChart",
        data: {
            type: 'line',
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
        },
        legend: {
            show: false
        },
        size: {
        height: 120
    },
        donut: {
            title: "Age"
        }
    });
}

  goToPrevSlide() {
    this.slides.slidePrev();
  }

  goToNextSlide() {
    this.slides.slideNext();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailScreen2Page');
  }
  

}
