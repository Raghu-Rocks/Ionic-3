import { Component, Input, ViewChild, ElementRef,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
// import { C3providerProvider, } from '../../../providers/c3provider/c3provider';
import * as c3 from 'c3';  
// import * as d3 from 'd3'; 
declare var d3: any;


@IonicPage()
@Component({
  selector: 'card1-design',
  templateUrl: 'cards.html',
  providers: [PeopleServiceProvider]
})

export class Card1Page {
  
  @Input() hero:any = PeopleServiceProvider;
  @Input('index') card_index:string;
  @ViewChild ("bulletChart")bulletCharts: ElementRef;
    public cardDataArray:any;       public data :any;                      public cardData : any;   public cardTargetProjected: any;
    public cardTargetData: any;     public jsonData:any;                public cardProjectedData: any;
    public mainArray: any;             public collectionArray: any;     public lastWeek:any;
    public lastWeekData: any;        public dataArray: any;             public dataArrayValue: any;
    public targetValue:any=[];        public actualValue:any=[];       public projectedValue:any=[];
    public tdy:any;                          public lstWeekData:any;          public title:any;

    barDataArray : any;    barData : any;             barDataTarget : any;  barDataProjected : any; 
    barDataVisits : any;    barGraphTarget: any;  barGraphVisits: any;
  ranges: number[] = [250, 230, 210, 150];
  actual: number[] = [200];
  target: number[] = [193];
  colors: any[] = ['lightgrey', 'orange', 'green'];
  height: number = 20;

  constructor(
        public navCtrl: NavController,        public peopleServiceProvider: PeopleServiceProvider,
        public navParams: NavParams,      public el: ElementRef,        private cdr: ChangeDetectorRef) {

         }

  navigateToDetailPage(hero){
    this.navCtrl.push("summary", hero);
    // console.log(this.hero, "hero");
  }
  ngAfterViewInit() {
    this.mapjson ();
    this.barChart("#barChart"+this.card_index, this.barGraphVisits);
    this.processBulletChart("#bulletTdy"+this.card_index, this.tdy, this.projectedValue,  this.targetValue, this.actualValue);
    this.processBulletChart("#bulletLstWeek"+this.card_index, this.lstWeekData, this.projectedValue,  this.targetValue, this.actualValue);
  }// fun ngafterViewInit ends here

  // fun for mapping the json data starts here, the variables are decleard at top
  mapjson (){
      // today
    this.data = Object.entries(this.hero.collection[0]);
    this.tdy = Object.entries(this.data[2][1]);
    this.cardData = Object.entries(this.tdy[0][1]);
    // console.log(this.tdy, 'cardData  tdy  ');
    this.cardDataArray = Object.entries(this.cardData);    
    this.cardTargetProjected = Object.entries(this.data[2][1]);
    this.cardTargetData = Object.entries( this.cardTargetProjected[1][1])[0][1];
    this.cardProjectedData = Object.entries( this.cardTargetProjected[2][1])[0][1];
    // this.areaGraphData = Object.keys(this.dataObject);
    // console.log(this.cardTargetProjected, 'cardProjected');


    //last week lebel and data
    this.jsonData = Object.entries(this.hero);
    this.mainArray = Object.entries(this.jsonData[4]);
    this.collectionArray = Object.entries(this.mainArray[1][1]);
    this.lastWeek = Object.entries(this.collectionArray[1][1])[0];
    this.dataArray = Object.entries(this.collectionArray[1][1])[2];
    this.lstWeekData = Object.entries(this.dataArray[1]);// for bullet last week data only
    this.dataArrayValue = Object.entries(this.dataArray[1])[0][1];
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
    this.cdr.detectChanges();
  }// end of fun json mapping
  processBulletChart(whereToPut, whichWeekData, projectedValue, targetValue, actualValue){
    for (var i in whichWeekData) {
                  // console.log(this.tdy, 'tdy');
              if (whichWeekData.hasOwnProperty(i) || typeof(whichWeekData[i])!='object') {
                  var test = whichWeekData[i];
                  // console.log(test, 'test')
                  for(var test_val in test){
                      if(typeof(test[test_val])!='object' ){
                       this.title=test[test_val]; // prints title
                      // console.log(this.title,'titlettt');
                    }
                    else{
                      //  console.log(test[test_val],'test[test_val]');                       
                      var arr_object=test[test_val];
                      if(typeof(arr_object)=='object' ){ // loop for date  inside object something like 15/11
                          for(var new_visit in arr_object ){
                            // console.log(arr_object[new_visit],new_visit,'data and key');
                            var arr_object1=arr_object[new_visit];
                          //  console.log(arr_object1,'arr_object12',typeof arr_object1);
                            if(typeof (arr_object1)!='object' ){ // loop for date  inside object something like 15/11
                            //  console.log(arr_object1, 'abc');                 
                                var count1=0;  var count2=0;
                                if (typeof arr_object1=='string') {
                                    arr_object1=  arr_object1.slice(0, -1); 
                                   this.renderCardData(arr_object1, projectedValue, targetValue, actualValue );
                                }
                                else if(typeof arr_object1=='number'){
                                 //  console.log(this.title,'title45');
                                   this.renderCardData(arr_object1, projectedValue, targetValue, actualValue );
                                }
                               //     console.log(this.title,'title444',typeof this.title);
                            }//if(typeof(arr_object1)=='object' )
                          }//for(var new_visit in arr_object )
                        }
                    }
                  }//for(var test_val in test)
                }
              }
                if(projectedValue.length>-1){
                    // console.log(this.projectedValue,this.targetValue,this.actualValue,'array output3');
                        for (var j = 0; j < projectedValue.length; j++) {
                          var bulletStackData = [{"ranges":[0,projectedValue[j] ,0], "measures":[actualValue[j] ],	  "markers":[targetValue]  }]
                          this.renderBulletChart(whereToPut, bulletStackData);
                        }
                    }//if(this.array2.length>0){
    }
  
    renderCardData(objectArray, outputProjected, outputTarget, outputActual){
                  var count1=0;var count3 =0;
                  var count2=0;                              
                    if(this.title.indexOf('Project')!=-1){ // it will be background color of graph
                        outputProjected[count1]=objectArray;
                        count1++;
                    }
                    else if (this.title.indexOf('Target')!=-1){
                        outputTarget[count2]=objectArray;
                        count2++;
                    }
                    else{//actual value
                        outputActual[count3]=objectArray;
                        count3++;
                    }
      }

renderBulletChart(WhereToPut, WhatDataToPut) {
  var bulletParentWidth; var bulletchart; var bulletmargin; var bulletwidth; var bulletHeight;

    bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
    bulletmargin = {top: 0, right: 3, bottom: 0, left: 0};
    bulletwidth = bulletParentWidth - bulletmargin.left - bulletmargin.right;    
    bulletHeight = 30 - bulletmargin.top - bulletmargin.bottom;
    bulletchart = d3.bullet()
    .width(bulletwidth)
    .height(bulletHeight)

  var svg = d3.select(WhereToPut).selectAll("svg")
      .data(WhatDataToPut)
    .enter().append("svg")
      .attr("class", "bullet")
      .attr("width", bulletwidth + bulletmargin.left + bulletmargin.right)
      .attr("height", bulletHeight + bulletmargin.top + bulletmargin.bottom)
    .append("g")
    //   .attr("transform", "translate(" + this.margin.left + "," +this.margin.top + ")")
      .call(bulletchart);
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


// fun for barChart starts here for home page card
barChart(whereToPut, whatToPut){
    c3.generate({
        bindto: whereToPut,
        data: {
            type: 'bar',
            // columns: [
            //                   ['data1', 30, 20, 50, 40, 60, 50],
            //                   ['data2', 200, 130, 90, 240, 130, 220],
            //                   ['data3', 300, 200, 160, 400, 250, 250]
            //                 ],
            columns: whatToPut,
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



}
