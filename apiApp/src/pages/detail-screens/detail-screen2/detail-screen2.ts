import { Component, ViewChild, Input, ElementRef,ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
// import * as c3 from 'c3';  
declare var d3: any;

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
    @ViewChild ("bulletChart")bulletCharts: ElementRef;
    data: any;
    cardName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cdr: ChangeDetectorRef) {
        this.navParams.get("hero");

  }
    ngAfterViewInit(){
        this.mapjson ();
        this.bulletChart();    
    }   

    mapjson (){
      // today
    this.data = Object.entries(this.navParams.data);
    this.cardName = Object.entries(this.data[0]);
    console.log(this.data, "data");
    console.log(this.cardName[1][1], "cardName");
    this.cdr.detectChanges();
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
console.log("width", this.bulletParentWidth);
 this.chart = d3.bullet()
    .width(this.width)
    .height(this.height)
    // .actualColor("#ff0000")
    // .targetColor("#00FF00")
    // .projectedColor("#0000FF")

this.something = d3.json("https://api.myjson.com/bins/rdlfz", (error, data) => {
  if (error) throw error;
  var svg = d3.select("#bulletChart").selectAll("svg")
    .data(data)
    .enter().append("svg")
      .attr("class", "bullet")
    //   .attr("width", "100%")
    //   .attr("height", "auto")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
    .append("g")
    //   .attr("transform", "translate(" + this.margin.left + "," +this.margin.top + ")")
      .call(this.chart);

//   var title = svg.append("g")
//       .style("text-anchor", "end")
//       .attr("transform", "translate(-6," + this.height / 2 + ")");

//   title.append("text")
//       .attr("class", "title")
//       .text(function(d) { return d.title; });

//   title.append("text")
//       .attr("class", "subtitle")
//       .attr("dy", "1em")
//       .text(function(d) { return d.subtitle; });

  d3.selectAll("back-button").on("click", function() {
    svg.datum(this.randomize).call(this.chart.duration(1000)); // TODO automatic transition
  });
});

}// end of bullet chart fun

randomize(d) {
  if (!d.randomizer) d.randomizer = this.randomizer(d);
  // d.ranges = d.ranges.map(d.randomizer);
  // d.markers = d.markers.map(d.randomizer);
  d.measures = d.measures.map(d.randomizer);
  return d;
}// fun required for bullet chart
randomizer(d) {
  var k = d3.max(d.ranges) * .2;
  return function(d) {
    return Math.max(0, d + k * (Math.random() - .5));
        };
}//fun  required for bullet chart

}
