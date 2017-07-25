import { Component, Input, ViewChild, ElementRef,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
import { C3providerProvider, } from '../../../providers/c3provider/c3provider';
import * as c3 from 'c3';  
// import * as d3 from 'd3'; 
declare var d3: any;


@IonicPage()
@Component({
  selector: 'card1-design',
  templateUrl: 'cards.html',
  providers: [PeopleServiceProvider,C3providerProvider]
})

export class Card1Page {
  
  @Input() hero:any = PeopleServiceProvider;
  @Input('master') masterName: string;
  @Input('index') card_index:string;
  @ViewChild ("bulletChart")bulletCharts: ElementRef;
    public data :any;
    public cardData : any;
    public cardDataArray:any;
    public cardTargetProjected: any;
    public cardTargetData: any;
    public cardProjectedData: any;
    public jsonData:any
    public mainArray: any;
    public collectionArray: any;
    public lastWeek:any;
    public lastWeekData: any;
    public dataArray: any;
    public dataArrayValue: any;

  constructor(
        public navCtrl: NavController,
        public peopleServiceProvider: PeopleServiceProvider,
        public navParams: NavParams,
        public el: ElementRef,
        private cdr: ChangeDetectorRef) {

         }


ngAfterViewInit() {
    this.mapjson ();
    this.bulletChart();
    this.barChart();
}// fun ngafterViewInit ends here

  barDataArray : any;
  barData : any;
  barDataTarget : any;
  barDataProjected : any;
  barDataVisits : any;
  barGraphTarget: any;
  barGraphVisits: any;
  // fun for mapping the json data starts here, the variables are decleard at top
  mapjson (){
      // today
    this.data = Object.entries(this.hero.collection[0]);
    let tdy = Object.entries(this.data[2][1]);
    this.cardData = Object.entries(tdy[0][1]);
    this.cardDataArray = Object.entries(this.cardData);    
    this.cardTargetProjected = Object.entries(this.data[2][1]);
    this.cardTargetData = Object.entries( this.cardTargetProjected[1][1])[0][1];
    this.cardProjectedData = Object.entries( this.cardTargetProjected[2][1])[0][1];
    // console.log("legend", this.cardTargetProjected);
    // console.log("Projected", this.cardProjectedData);
    //last week lebel and data
    this.jsonData = Object.entries(this.hero);
    this.mainArray = Object.entries(this.jsonData[4]);
    this.collectionArray = Object.entries(this.mainArray[1][1]);
    this.lastWeek = Object.entries(this.collectionArray[1][1])[0];
    
    this.dataArray = Object.entries(this.collectionArray[1][1])[2];
    this.dataArrayValue = Object.entries(this.dataArray[1])[0][1];
    // console.log(this.dataArrayValue);
    this.lastWeekData = Object.entries(this.dataArrayValue);


    // bar chart data
    this.barDataArray = Object.entries(this.collectionArray[2])[1];
    this.barData = Object.entries(this.barDataArray[1])[2];
    this.barDataTarget = Object.entries(this.barData[1])[0][1];
    this.barGraphTarget = Object.entries(this.barDataTarget);
    // console.log(this.barDataTarget, "dataTarget");
    // console.log(this.barGraphTarget);
    this.barDataVisits = Object.entries(this.barData[1])[0][1];
    this.barGraphVisits = Object.entries(this.barDataVisits);
    // console.log(this.barGraphVisits, 'Visits');
    for (var index = 0; index < this.barGraphTarget.length; index++) {
      var element = this.barGraphTarget[index];
      // console.log(element[1], 'element');
    }
    this.cdr.detectChanges();
  }// end of fun json mapping




// fun for barChart starts here for home page card
barChart(){
    c3.generate({
        bindto: "#barChart"+this.card_index,
        data: {
            type: 'bar',
            // columns: [
            //                   ['data1', 30, 20, 50, 40, 60, 50],
            //                   ['data2', 200, 130, 90, 240, 130, 220],
            //                   ['data3', 300, 200, 160, 400, 250, 250]
            //                 ],
            columns: this.barGraphVisits,
            //  [
            //     ['data1', 180, 170, 180, 190, 170, 140, 170, 190, 76 ]
            //     // ['data2', 180, 170, 180, 180, 190, 190, 190, 190, 76 ]
            // ],
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
    }// fun barChart end here


  navigateToDetailPage(hero){
    this.navCtrl.push("summary", hero);
    // console.log(this.hero, "hero");
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
    // .actualColor("#ff0000")
    // .targetColor("#00FF00")
    // .projectedColor("#0000FF")

this.something = d3.json("https://api.myjson.com/bins/1ciwp3", (error, data) => {
  if (error) throw error;

  var svg = d3.select("#bulletChart"+this.card_index).selectAll("svg")
      .data(data)
    .enter().append("svg")
      .attr("class", "bullet")
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

  // d3.selectAll("button").on("click", function() {
  //   svg.datum(this.randomize).call(this.chart.duration(1000)); // TODO automatic transition
  // });
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
