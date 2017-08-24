import { Component, Input, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import * as c3 from 'c3';
//  import * as d3 from 'd3'; 
declare var d3: any;


@IonicPage()
@Component({
    selector: 'card1-design',
    templateUrl: 'cards.html',
    providers: [PeopleServiceProvider]
})

export class Card1Page implements AfterViewInit{

    @Input() hero: any = PeopleServiceProvider;
    @Input('index') card_index: string;
    @ViewChild("bulletChart") bulletCharts: ElementRef;
    // ranges: number[] = [250, 230, 210, 150];
    // actual: number[] = [200];
    // target: number[] = [193];
    // colors: any[] = ['lightgrey', 'orange', 'green'];
    // height: number = 20;

    // public cardTargetData: any;   public cardProjectedData: any;
    //public dataArrayValue: any; public lastWeekData: any;  
    public cardDataArray: any;             public data: any;                            public cardData: any; 
    public cardTargetProjected: any;    public jsonData: any;                     public mainArray: any;                     
    public collectionArray: any;            public lastWeek: any;                     public dataArray: any;                  
    public targetValue: any = [];           public actualValue: any = [];          public projectedValue: any = [];
    public tdy: any;                               public lstWeekData: any;               public title: any;

    barDataArray: any; barData: any; title1: any; barDataTarget: any; barDataProjected: any; barActualValue: any = [];
    barTargetValue: any = [];    barDataVisits: any; barGraphTarget: any; barGraphVisits: any; barDataObject: any;
    barProjectedValue: any = []; barDataDate:any = [];

    count11 = 0; count21 = 0; count31 = 0; count1 = 0; count2 = 0; count3 = 0;

    card1tdyP: any = []; card1tdyT: any = []; card1tdyA: any = [];    lastWeekA:any =[]; lastWeekT:any = [];

    constructor(
        public el: ElementRef, 
        public navCtrl: NavController,
        public navParams: NavParams,
        private screenshot: Screenshot,
        private cdr: ChangeDetectorRef, 
        private socialSharing: SocialSharing,
        public peopleServiceProvider: PeopleServiceProvider) {

    }

    navigateToDetailPage(hero) {
        this.navCtrl.push("summary", hero);
        // console.log(this.hero, "hero");
    }
    shareSheetShare() {
        // this.screenShotURL() ;
        // this.screenshot.save('jpg', 100, "pic" +this.screenCount).then(res => {
        //   this.screen = res.filePath;
            var screen
            this.screenshot.URI(80).then(res => {
            screen = res.URI;
            // console.log(screen, 'path');
        this.socialSharing.share(null, null, screen, null).then(() => {
        console.log("shareSheetShare: Success");
        }).catch((Error) => {
        console.error("shareSheetShare: failed"+ Error);
        });

        });
  }
    ngAfterViewInit() {
        //  console.log('after view');
        this.mapjson();
        this.processBarChart();
        // console.log("#bulletTdy" + this.card_index, this.tdy, this.projectedValue, this.targetValue, this.actualValue, 'valllles');
        this.processBulletChart("#bulletTdy" + this.card_index, this.tdy, this.projectedValue, this.targetValue, this.actualValue);
        this.processBulletChart("#bulletLstWeek" + this.card_index, this.lstWeekData, this.projectedValue, this.targetValue, this.actualValue);
    }// fun ngafterViewInit ends here

    // fun for mapping the json data starts here, the variables are decleard at top
    mapjson() {
        // today
        this.data = Object.entries(this.hero.collection[0]);
        this.tdy = Object.entries(this.data[2][1]);
        this.cardData = Object.entries(this.tdy[0][1]);
        // console.log(this.cardData, 'cardData  tdy  ');
        this.cardDataArray = Object.entries(this.cardData);
        this.cardTargetProjected = Object.entries(this.data[2][1]);
        // this.cardTargetData = Object.entries(this.cardTargetProjected[1][1])[0][1];
        // this.cardProjectedData = Object.entries(this.cardTargetProjected[2][1])[0][1];
        // this.areaGraphData = Object.keys(this.dataObject);
        // console.log(this.cardTargetProjected, 'cardProjected');

        //todays data with Kformatter, this is used in html only.
        this.tdyAndLastWeekDataForHtmOnlyl(this.cardTargetProjected,this.card1tdyP,this.card1tdyT,this.card1tdyA);
        


        //last week lebel and data
        this.jsonData = Object.entries(this.hero);
        this.mainArray = Object.entries(this.jsonData[4]);
        this.collectionArray = Object.entries(this.mainArray[1][1]);
        this.lastWeek = Object.entries(this.collectionArray[1][1])[0];
        this.dataArray = Object.entries(this.collectionArray[1][1])[2];
        this.lstWeekData = Object.entries(this.dataArray[1]);// for bullet last week data only in HTML Template summary
        // this.dataArrayValue = Object.entries(this.dataArray[1])[0][1];
        // this.lastWeekData = Object.entries(this.dataArrayValue);
        // console.log(this.lstWeekData, 'lastWeekData');

        this.tdyAndLastWeekDataForHtmOnlyl(this.lstWeekData,null,this.lastWeekT,this.lastWeekA);
        
        // bar chart data
        this.barDataArray = Object.entries(this.collectionArray[2])[1];
        this.barData = Object.entries(this.barDataArray[1])[2];
        this.barDataObject = Object.entries(this.barDataArray[1])[2][1];
        this.barDataObject = Object.entries(this.barDataObject);
        this.barDataTarget = Object.entries(this.barData[1])[0][1];
        this.barGraphTarget = Object.entries(this.barDataTarget);
        // console.log(this.barDataObject, "dataTarget");
        // console.log(this.barGraphTarget,'barGraphTarget');
        this.barDataVisits = Object.entries(this.barData[1])[0][1];
        this.barGraphVisits = Object.entries(this.barDataVisits);
        // console.log(this.barGraphVisits, 'Visits');
        this.cdr.detectChanges();
    }// end of fun json mapping


// used for templete summary for today and last week data in Html(cards) not for any graph
    tdyAndLastWeekDataForHtmOnlyl(whichWeekData,projectedValue, targetValue,actualValue ){
            //lastWeek data with Kformatter, this is used in html only.
            for (var i in whichWeekData) {
                if (this.cardTargetProjected.hasOwnProperty(i) || typeof (whichWeekData[i]) != 'object') {
                var test = whichWeekData[i];
                    for (var test_val in test) {
                        if (typeof (test[test_val]) != 'object') {
                            var title = test[test_val]; // prints title
                            // console.log(title,'titlettt');
                        }
                        else{
                                 // console.log(test[test_val],'test[test_val]');
                                var arr_object=test[test_val];
                             if(typeof(arr_object)=='object' ){ // loop for date  inside object something like 15/1
                                    for(var new_visit1 in arr_object ){
                                    // console.log(title,'title444');
                                        if(title.indexOf('Projected')!==-1){
                                            var tdyP =arr_object[new_visit1];
                                            if(typeof tdyP=='number'){
                                                projectedValue.push(this.kFormatter(tdyP));
                                            }
                                                else{
                                                    projectedValue.push(tdyP);
                                                }
                                        }
                                        else if(title.indexOf('Target')!==-1) {
                                                var tdyT=arr_object[new_visit1];
                                                if(typeof tdyT=='number'){
                                                    targetValue.push(this.kFormatter(tdyT));
                                                }
                                                else{
                                                    targetValue.push(tdyT);
                                                }
                                            }
                                        else{
                                               var tdyA=arr_object[new_visit1];
                                                if(typeof tdyA=='number'){
                                                        actualValue.push(this.kFormatter(tdyA));
                                                }
                                                else{
                                                    actualValue.push(tdyA);
                                                }
                                        } 
                                    }
                                    // console.log(this.card1tdyA,"aray1",this.card1tdyT,'Array2', this.card1tdyP, "array3"); // data points
                            }
                        }
                    }
                }
            }
    }

    //bullet data is being processed here and calling renderBulletChart() fun. here only
    processBulletChart(whereToPut, whichWeekData, projectedValue, targetValue, actualValue) {
        for (var i in whichWeekData) {
            // console.log(whichWeekData, 'tdy');
            if (whichWeekData.hasOwnProperty(i) || typeof (whichWeekData[i]) != 'object') {
                var test = whichWeekData[i];
                // console.log(test, 'test')
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title = test[test_val]; // prints title
                        // console.log(this.title,'titlettt');
                    }
                    else {
                        //  console.log(test[test_val],'test[test_val]');                       
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') { // loop for date  inside object something like 15/11
                            for (var new_visit in arr_object) {
                                // console.log(arr_object[new_visit],new_visit,'data and key');
                                var arr_object1 = arr_object[new_visit];
                                //  console.log(arr_object1,'arr_object12',typeof arr_object1);
                                if (typeof (arr_object1) != 'object') { // loop for date  inside object something like 15/11
                                    //  console.log(arr_object1, 'abc');
                                    if (typeof arr_object1 == 'string') {
                                        arr_object1 = arr_object1.slice(0, -1);
                                        this.renderCardData(arr_object1, projectedValue, targetValue, actualValue);
                                    }
                                    else if (typeof arr_object1 == 'number') {
                                        //  console.log(this.title,'title45');
                                        this.renderCardData(arr_object1, projectedValue, targetValue, actualValue);
                                    }
                                    //     console.log(this.title,'title444',typeof this.title);
                                }//if(typeof(arr_object1)=='object' )
                            }//for(var new_visit in arr_object )
                        }
                    }
                }//for(var test_val in test)
            }
        }
        if (projectedValue.length > -1) {
            // console.log(this.projectedValue, this.targetValue, this.actualValue, 'array output3');
            for (var j = 0; j < projectedValue.length; j++) {
                var bulletStackData = [{ "ranges": [0, projectedValue[j], 0], "measures": [actualValue[j]], "markers": [targetValue] }]
                this.renderBulletChart(whereToPut, bulletStackData);
                //   if (condition) {

                //   }
            }
        }//if(this.array2.length>0){
    }
    renderCardData(objectArray, outputProjected, outputTarget, outputActual) {
        var count1 = 0; var count2 = 0; var count3 = 0;
        if (this.title.indexOf('Project') != -1) { // it will be background color of graph
            outputProjected[count1] = objectArray;
            count1++;
            // console.log(count1, 'count');
        }
        else if (this.title.indexOf('Target') != -1) {
            outputTarget[count2] = objectArray;
            count2++;
        }
        else {//actual value
            outputActual[count3] = objectArray;
            count3++;
            // console.log(this.barActualValue.length, 'this.actualValue.length');                      
        }
        // console.log(count1, count2, count3, 'count');                  
    }

    //creating bullet chart
    renderBulletChart(WhereToPut, WhatDataToPut) {
        var bulletParentWidth; var bulletchart; var bulletmargin; var bulletwidth; var bulletHeight;

        bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
        bulletmargin = { top: 0, right: 3, bottom: 0, left: 0 };
        bulletwidth = bulletParentWidth - bulletmargin.left - bulletmargin.right;
        bulletHeight = 30 - bulletmargin.top - bulletmargin.bottom;
        bulletchart = d3.bullet()
            .width(bulletwidth)
            .height(bulletHeight)

            d3.select(WhereToPut).selectAll("svg")
            .data(WhatDataToPut)
            .enter().append("svg")
            .attr("class", "bullet")
            .attr("width", bulletwidth + bulletmargin.left + bulletmargin.right)
            .attr("height", bulletHeight + bulletmargin.top + bulletmargin.bottom)
            .append("g")
            //   .attr("transform", "translate(" + this.margin.left + "," +this.margin.top + ")")
            .call(bulletchart);
            d3.selectAll('.bullet .measure.s0').attr('rx', 4);
            d3.selectAll('.bullet .measure.s0').attr('ry', 4);

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
        return function (d) {
            return Math.max(0, d + k * (Math.random() - .5));
        };
    }//fun  required for bullet chart

        //processing bar chart data and calling barChart fun here only
    processBarChart() {
        for (var i in this.barDataObject) {
            // console.log(this.barDataObject, "dataTarget");     
            if (this.barDataObject.hasOwnProperty(i)) {
                var test = this.barDataObject[i];
                // console.log(test);
                // var data_graph=test[1][1];
                // var counter =0
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title1 = test[test_val]; // prints title
                        // console.log(this.title,'title1');
                    }
                    else {
                        //  console.log(test[test_val],'test[test_val]');
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') { // loop for date  inside object something like 15/11
                            for (var new_visit in arr_object) {
                                //  console.log(arr_object[new_visit],new_visit,'data and key');
                                var arr_object1 = arr_object[new_visit];
                                //  console.log(arr_object1,'arr_object12',typeof arr_object1);   
                                if (typeof (arr_object1) != 'object') { // loop for date  inside object something like 15/11
                                    // console.log(arr_object1, 'abc');
                                    //  var count1=0; var count2 =0; var count3 = 0;
                                    if (typeof arr_object1 == 'string') {
                                        arr_object1 = arr_object1.slice(0, -1);
                                        //  this.renderCardData(arr_object1, this.barProjectedValue, this.barTargetValue, this.barActualValue );
                                        // var count11=0; var count21=0; var count31 =0;                             
                                        if (this.title1.indexOf('Project') != -1) { // it will be background color of graph
                                            this.barProjectedValue[this.count11] = arr_object1;
                                            this.count11++;
                                            // console.log(this.count11, 'count');
                                        }
                                        else if (this.title1.indexOf('Target') != -1) {
                                            this.barTargetValue[this.count21] = arr_object1;
                                            this.count21++;
                                        }
                                        else {//actual value
                                            this.barActualValue[this.count31] = arr_object1;
                                            this.barDataDate[this.count31] = new_visit;
                                            this.count31++;
                                            // console.log(this.barActualValue.length, 'this.actualValue.length');
                                            // console.log(new_visit, 'this.actualValue.length');                      
                                                                            
                                        }
                                    }
                                    else if (typeof arr_object1 == 'number') {
                                        // console.log(this.title1,'title45');
                                        //  this.renderCardData(arr_object1, this.barProjectedValue, this.barTargetValue, this.barActualValue );
                                        var count1 = 0;
                                        if (this.title1.indexOf('Project') != -1) { // it will be background color of graph
                                            this.barProjectedValue[count1] = arr_object1;
                                            count1++;
                                            // console.log(count1, 'count');
                                        }
                                        else if (this.title1.indexOf('Target') != -1) {
                                            this.barTargetValue[this.count2] = arr_object1;
                                            this.count2++;
                                        }
                                        else {//actual value               
                                            this.barActualValue[this.count3] = arr_object1;
                                            this.barDataDate[this.count3] = new_visit;                                            
                                            this.count3++;
                                            // console.log(this.actualValue.length, 'this.actualValue.length');                      
                                        }
                                    }

                                }//if(typeof(arr_object1)=='object' )
                                // console.log(this.barActualValue.length, 'this.actualValue.length');                        

                            }//for(var new_visit in arr_object )
                        }
                    }
                }
            }
        }
        // console.log(this.barActualValue,"actualValue",this.barProjectedValue,'projectedValue',this.barTargetValue, 'barTargetValue' );
        this.barActualValue[0] = 'data1';
        this.barTargetValue[0] = 'data2';

        var barStackData = [this.barActualValue, this.barTargetValue];
        this.barChart("#barChart" + this.card_index, barStackData, this.card_index);
        // console.log('date',this.barDataDate);
    }
      // fun for barChart starts here for home page card
   barChart(whereToPut, whatToPut, cardIndex) {
        let self:any = this;
        c3.generate({
            bindto: whereToPut,
            data: {
                // type: 'bar',
                types: {
                    data1: 'bar',
                    data2: 'line'
                },
                columns: whatToPut,
                labels: {
                    format: {
                       // Label formatter for card1 and card2 are different, so logic is built with index of the card.
                        data1: function (v, id, i, j) {
                                if(cardIndex === 1) {
                                    return v + '%';
                                }
                                else {
                                    return self.kFormatter(v); 
                                }
                            } 
                    }
                },
                colors: {
                    data1: '#F68B24',
                    data2: '#00ff00',
                }
            },
            legend: {
                show: false
            },
            size: {
                height: 100
            },
            axis: {
                x: {
                                show:true,
                                type: 'category',
                                categories: this.barDataDate,
                                tick: {
                                    centered: true
                                },
                                
                        },
                y: {
                    // label: 'Y Label',
                    show: false
                }
            },
            bar: {
                width: {
                    ratio: 0.9 // this makes bar width 50% of length between ticks
                }
            },
            tooltip: {
                show: false
            }
        });
        var element = d3.select('.c3-event-rect');
          var yvalue = element.node().getBBox().height;
          d3.selectAll('.c3-texts text').attr('y', yvalue-10);
          d3.selectAll('.c3-axis-x').attr("transform", "translate(0,0)");
          d3.selectAll('.c3-chart').attr("transform", "translate(0, "+((yvalue/2)-10)+")");

    }// fun barChart end here


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
