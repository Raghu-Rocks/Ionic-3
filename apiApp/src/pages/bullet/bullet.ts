import { Component, Input, ElementRef, ViewChild, OnInit, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import * as d3 from 'd3';  
// import * as nv from 'nv';  
declare var d3: any;


@IonicPage()
@Component({
  selector: 'bullet-chart',
  templateUrl: 'bullet.html',
})
export class BulletPage implements OnChanges, AfterViewInit{
  @Input() bullet: string;
  @Input('index') card_index:string;
  @ViewChild ("bulletChart")bulletCharts: ElementRef;

    //css bullet code
    @ViewChild('bulletwrapper') container: any;
    @Input('colors') colors: any[];
    @Input('height') height: number; //pixels
    @Input('actual') actual: number[];
    @Input('target') target: number[];
    @Input('ranges') ranges: number[];

    calc_height: number = 0;
    actual_height: number = 0;
    actual_top: number = 0;

    calc_ranges: number[] = [];
    calc_actual: number[] = [];
    calc_target: number = 0;

    showTarget: boolean = false;
    showRange: boolean = false;

    color_array: any[] = ['lightgrey', 'slateblue', 'blueviolet'];

    range_opacity: any[] = [];
    actual_opacity: any[] = [];
    viewInit: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }


    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        if (this.viewInit) {
            this.processData();
        }
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.viewInit = true;
        this.processData();
    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.

    }

    processData() {
        this.setColors();
        this.calculateHeights();
        let act_max: number = Number.MIN_VALUE;
        let range_max: number = Number.MIN_VALUE;
        let target_max: number = Number.MIN_VALUE;
        let max: number = Number.MIN_VALUE;
        let self = this;

        if (this.actual) {
            act_max = Math.max(...this.actual);
        }
        if (this.ranges) {
            range_max = Math.max(...this.ranges);
        }
        if (this.target) {
            target_max = Math.max(...this.target);
        }
        max = Math.max(act_max, range_max, target_max);

        if (this.target && this.target.length > 0) {
            this.calc_target = target_max / max * 100;
            this.showTarget = true;
        }

        if (this.actual && this.actual.length > 0) {
            this.actual.forEach((item) => {
                this.calc_actual.push((item / max) * 100)
            });
            this.calc_actual.sort((a, b) => { return a - b });
            this.addActualOpacity();
        }

        if (this.ranges && this.ranges.length > 0) {
            this.ranges.forEach((item) => {
                this.calc_ranges.push((item / max) * 100)
            });
            this.calc_ranges.sort((a, b) => { return a - b });
            this.addRangeOpacity();
            this.showRange = true;
        }

    }


    addRangeOpacity() {
        let num = this.calc_ranges.length;
        while (num > 0) {
            this.range_opacity.push(1 / num);
            num--;
        }
        this.range_opacity.reverse();

    }
    addActualOpacity() {
        let num = this.calc_actual.length;
        while (num > 0) {
            this.actual_opacity.push(1 / num);
            num--;
        }
        this.actual_opacity.reverse();
    }
    calculateHeights() {
        if (this.height) {
            this.calc_height = Math.round(this.height);
        }
        this.actual_height = this.calc_height / 2;
        this.actual_top = this.actual_height / 2;
    }

    setColors() {
        if (this.colors && this.colors.length === 3) {
            this.color_array = this.colors;
        }
    }













































































  // ngAfterViewInit() {
  //   this.bulletChart();
  // }// fun ngafterViewInit ends here
  // Variables required for bullet chart are listed here
//   bulletParentWidth;
//   chart;
//   margin;
//   width;
//   height;
//   something;
//   bulletChart() {
//     this.bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
//     this.margin = {top: 0, right: 3, bottom: 0, left: 0};
//     this.width = this.bulletParentWidth - this.margin.left - this.margin.right;    
//     this.height = 30 - this.margin.top - this.margin.bottom;
//     console.log("width", this.bulletParentWidth);
//     this.chart = d3.bullet()
//     .width(this.width)
//     .height(this.height)
//     // .actualColor("#ff0000")
//     // .targetColor("#00FF00")
//     // .projectedColor("#0000FF")

//   this.something = d3.json("https://api.myjson.com/bins/1ciwp3", (error, data) => {
//   if (error) throw error;

//     var svg = d3.select("#bulletChart"+this.card_index).selectAll("svg")
//       .data(data)
//       .enter().append("svg")
//       .attr("class", "bullet")
//     //   .attr("width", "100%")
//     //   .attr("height", "auto")
//       .attr("width", this.width + this.margin.left + this.margin.right)
//       .attr("height", this.height + this.margin.top + this.margin.bottom)
//       .append("g")
//     //   .attr("transform", "translate(" + this.margin.left + "," +this.margin.top + ")")
//       .call(this.chart);

// //   var title = svg.append("g")
// //       .style("text-anchor", "end")
// //       .attr("transform", "translate(-6," + this.height / 2 + ")");

// //   title.append("text")
// //       .attr("class", "title")
// //       .text(function(d) { return d.title; });

// //   title.append("text")
// //       .attr("class", "subtitle")
// //       .attr("dy", "1em")
// //       .text(function(d) { return d.subtitle; });

//   d3.selectAll("button").on("click", function() {
//     svg.datum(this.randomize).call(this.chart.duration(1000)); // TODO automatic transition
//   });
//   });

// }// end of bullet chart fun

// randomize(d) {
//   if (!d.randomizer) d.randomizer = this.randomizer(d);
//     d.ranges = d.ranges.map(d.randomizer);
//     d.markers = d.markers.map(d.randomizer);
//     d.measures = d.measures.map(d.randomizer);
//     return d;
//   }// fun required for bullet chart
//   randomizer(d) {
//     var k = d3.max(d.ranges) * .2;
//     return function(d) {
//       return Math.max(0, d + k * (Math.random() - .5));
//     };
//   }//fun  required for bullet chart



}