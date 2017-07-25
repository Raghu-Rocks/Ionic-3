import { Component, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
import * as c3 from 'c3';
declare var d3: any;

@IonicPage()
@Component({
  selector: 'card2-design',
  templateUrl: 'card2.html',
  providers: [PeopleServiceProvider]
})
export class Card2Page {

  @Input() hero2:any = PeopleServiceProvider;
  @Input('index') card_index:any;
  @ViewChild ('#dashboardCharts')dashboardChart: ElementRef;
  @ViewChild ("bull")bulletCharts: ElementRef;
    public data :any;
    public cardData : any;
    public cardDataArray:any;
    public i: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public peopleServiceProvider: PeopleServiceProvider,
    private cdr: ChangeDetectorRef) {  }
ngAfterViewInit() {
   this.mapjson ();
   this.donutChart();
   this.bulletChart();
   this.bulletId();
}

  navigateToDetailPage(){
    this.navCtrl.push("channels", this.hero2)
  //  console.log(this.hero2, "hero")
}

  mapjson (){
  this.data = Object.entries(this.hero2.collection[0]);
    let temp = Object.entries(this.data[2][1]);
    this.cardData = Object.entries(temp[0][1])[0][1];
    this.cardDataArray = Object.entries(this.cardData);
    console.log(this.cardDataArray, "length");
    this.cdr.detectChanges();
  }
  
element:any;
bulletId(){
    for (var index = 0; index < this.cardDataArray.length; index++) {
      this.element = [index];
      console.log(this.element,"element");
      return this.element;
    }
}
// Variables required for bullet chart are listed here
bulletParentWidth;
chart;
margin;
width;
height;
something;
bulletChart() {
    this.bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
    this.margin = {top: 0, right: 3, bottom: 0, left: 0};
    this.width = this.bulletParentWidth - this.margin.left - this.margin.right;    
    this.height = 30 - this.margin.top - this.margin.bottom;
// console.log("width", this.bulletParentWidth);
 this.chart = d3.bullet()
    .width(this.width)
    .height(this.height)

this.something = d3.json("https://api.myjson.com/bins/1ciwp3", (error, data) => {
  if (error) throw error;

  var svg = d3.select("#bulletChart"+this.card_index+this.element).selectAll("svg")
      .data(data)
    .enter().append("svg")
      .attr("class", "bullet")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
    .append("g")
    //   .attr("transform", "translate(" + this.margin.left + "," +this.margin.top + ")")
      .call(this.chart);

});

}// end of bullet chart fun

randomize(d) {
  if (!d.randomizer) d.randomizer = this.randomizer(d);
  d.ranges = d.ranges.map(d.randomizer);
  d.markers = d.markers.map(d.randomizer);
  d.measures = d.measures.map(d.randomizer);
  return d;
}// fun required for bullet chart
randomizer(d) {
  var k = d3.max(d.ranges) * .2;
  return function(d) {
    return Math.max(0, d + k * (Math.random() - .5));
        };
}//fun  required for bullet chart


  donutChart(){
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
        height: 160
    },
    donut: {
      width: 12
    }
    });
  }
  /**
 * Formats data for Charts/legends and ticks
 * 
 * @param {any} num 
 * @returns 
 */
 kFormatter(num) {
    if (isNaN(num)) return 0;
    //	console.log(num);
    if (num > 99999) {
        return (num / 1000000).toFixed(2) + 'M';
    } else {
        return num > 999 ? (num / 1000).toFixed(2) + 'k' : num.toFixed(2);

    }
 }
}
