import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import * as d3 from 'd3';  
// import * as nv from 'nv';  
declare var d3: any;


/**
 * Generated class for the BulletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bullet',
  templateUrl: 'bullet.html',
})
export class BulletPage {
  @Input() bullet: string;
  @Input('index') card_index:string;

  @ViewChild ("bulletChart")bulletCharts: ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BulletPage');
  }
  ngAfterViewInit() {
    this.bulletChart();
}// fun ngafterViewInit ends here
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

this.something = d3.json("https://api.myjson.com/bins/1ciwp3", (error, data) => {
  if (error) throw error;

  var svg = d3.select("#bulletChart"+this.card_index).selectAll("svg")
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

  d3.selectAll("button").on("click", function() {
    svg.datum(this.randomize).call(this.chart.duration(1000)); // TODO automatic transition
  });
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



}