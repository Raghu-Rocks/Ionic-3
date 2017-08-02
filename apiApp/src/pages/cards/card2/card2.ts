import { Component, Input,OnInit, ViewChild,AfterViewInit, ElementRef, ChangeDetectorRef,ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
import * as c3 from 'c3';
declare var d3: any;
declare var nv: any;

@IonicPage()
@Component({
  selector: 'card2-design',
  templateUrl: 'card2.html',
  // styleUrls: [    '../../node_modules/nvd3/build/nv.d3.css'  ],
  encapsulation: ViewEncapsulation.None,
  providers: [PeopleServiceProvider]
})
export class Card2Page implements AfterViewInit, OnInit{

  @Input() hero2:any = PeopleServiceProvider;
  @Input('index') card_index:any;
  @ViewChild ('#dashboardCharts')dashboardChart: ElementRef;
  @ViewChild ("bullet")bulletCharts: ElementRef;
    public data :any;
    public cardData : any;
    public cardDataArray:any;
    public temp:any;
    public bulletDataValues: string[];
    public title:any;
    public array1:any=[];
    public array2:any=[];
    // Variables required for bullet chart are listed here
          bulletParentWidth;
          chart;
          margin;
          width;
          bulletHeight;
  ranges: number[] = [130, 230, 210];
  actual: number[] = [200];
  target: number[] = [193];
  colors: any[] = ['lightgrey', 'orange', 'green'];
  height: number = 20;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public peopleServiceProvider: PeopleServiceProvider,
    private cdr: ChangeDetectorRef) {
      }
ngOnInit() {
          this.kFormatter(this.cardDataArray)
}
  ngAfterViewInit() {
        this.mapjson ();
        this.donutChart();
        this.renderBulletData();
  }
  navigateToDetailPage(){
    this.navCtrl.push("channels", this.hero2)
  }
  //rendering bullet data and calling data variable and bullet function here
  renderBulletData(){
    for (var i in this.bulletTempProjected) {
        if (this.bulletTempProjected.hasOwnProperty(i)) {
            var test = this.bulletTempProjected[i];
            var data_graph=test[1][1];
            var counter =0
          for(var test_val in test){
              if(typeof(test[test_val])!='object' ){
                      this.title=test[test_val]; // prints title
                      // console.log(this.title,'title');
              }
              else{
               // console.log(test[test_val],'test[test_val]');
                var arr_object=test[test_val];
                if(typeof(arr_object)=='object' ){ // loop for date  inside object something like 15/11
                    for(var new_visit in arr_object ){
                   //     console.log(arr_object[new_visit],new_visit,'data and key');
                  var arr_object1=arr_object[new_visit];
                  if(typeof(arr_object1)=='object' ){ // loop for date  inside object something like 15/11
                      var  array1=[];
                      var count1=0;var counter =0;
                      var array2=[];var count2=0
                    for(var new_visit1 in arr_object1 ){
                        // console.log(arr_object1[new_visit1],new_visit1,'data and key2',count1); // data points
                        // console.log(this.title,'title444');
                        if(this.title.indexOf('Project')==-1){
                          this.array1[count1] =arr_object1[new_visit1];
                          count1++;
                        }
                        else{
                            this.array2[count2] =arr_object1[new_visit1];
                            count2++;
                        }
                    }
                    if(this.array2.length>0){
                        // console.log(this.array1,this.array2,'asdsds');
                        for (var j = 0; j < this.array1.length; j++) {
                          var bulletStackData = [{"ranges":[0,this.array1[j] ,0], "measures":[this.array2[j] ],	  "markers":[270]  }]
                          this.renderBulletChart("#bulletChart"+ this.card_index + j, bulletStackData);
                        }
                    }//if(this.array2.length>0){
                }//if(typeof(arr_object1)=='object' )
                    }//for(var new_visit in arr_object )
                }
            }
      }
    }
    }
  }


  bulletData
  bulletTemp
  bulletCardData
  bulletCardDataArray

  bulletTempProjected
  bulletProjectedData
  bulletProjectedDataArray
  bulletProjectedDataValue
  
  mapjson (){
//donut data
    this.data = Object.entries(this.hero2.collection[0]);
    this.temp = Object.entries(this.data[2][1]);
    this.cardData = Object.entries(this.temp[0][1])[0][1];
    this.cardDataArray = Object.entries(this.cardData);

//bullet Visits data
    this.bulletData = Object.entries(this.hero2.collection[1]);
    this.bulletTemp = Object.entries(this.bulletData[2][1])[0];
    this.bulletCardData = Object.entries(this.bulletTemp[1]);
    this.bulletCardDataArray = Object.entries(this.bulletCardData[0][1]);
    // console.log(this.bulletCardDataArray, 'bulletCardDataArrayValues');

//bullet projected data
  this.bulletTempProjected = Object.entries(this.bulletData[2][1]);
  // console.log(this.bulletTempProjected);
  this.bulletProjectedData = Object.entries(this.bulletTempProjected[1]);
  // console.log(this.bulletProjectedData);
  this.bulletProjectedDataArray = Object.entries(this.bulletProjectedData[0][1]);
    // console.log(this.bulletProjectedDataArray);
//bullet projected data
    this.cdr.detectChanges();

  }
renderBulletChart(whereToPut, WhatToPut) {
    this.bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
    this.margin = {top: 0, right: 3, bottom: 0, left: 0};
    this.width = this.bulletParentWidth - this.margin.left - this.margin.right;    
    this.bulletHeight = 30 - this.margin.top - this.margin.bottom;

    this.chart = d3.bullet()
    .width(this.width)
    .height(this.bulletHeight)

  var svg = d3.select(whereToPut).selectAll("svg")
    .data(WhatToPut)
    .enter().append("svg")
      .attr("class", "bullet")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.bulletHeight + this.margin.top + this.margin.bottom)
    .append("g")
    //   .attr("transform", "translate(" + this.margin.left + "," +this.margin.top + ")")
      .call(this.chart);
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
