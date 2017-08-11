import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as c3 from 'c3';
declare var d3: any;



@IonicPage()
@Component({
  selector: 'page-detail-screen1',
  templateUrl: 'detail-screen1.html',
})
export class summary {
    @ViewChild ("bulletChart")bulletCharts: ElementRef;
    public title:any;
    data:any;
    cardName:any;
    public lstArray1:any;        public lstArray2:any;    public lstArray3:any;    public tdyArray1:any;
    public tdyArray2:any;       public tdyArray3:any;
    tdyBulletA:any =[];    tdyBulletT:any =[];    tdyBulletP:any =[];                   lastBulletA:any =[];
    lastBulletT:any =[];    lastBulletP:any =[];    areaActualValue:any =[];         areaTargetValue:any =[];
    users:any = [];           values:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cdr:ChangeDetectorRef) {
      this.navParams.get("hero");
  }
 ngAfterViewInit(){
        this.mapjson ();
        this.processBulletGraph("#bulletLast"+this.lastBulletA, this.lstWekData, this.lastBulletP, this.lastBulletT, this.lastBulletA,"lastWeek");
       this.processBulletGraph("#bulletTdy"+this.tdyBulletA, this.tdyData, this.tdyBulletP, this.tdyBulletT, this.tdyBulletA,"");
        this.renderLastWeekData();
        this.renderTdyWeekData();
        this.processAreaChart("#dashboardChart");
    }
  navigateToHome(){
    this.navCtrl.popToRoot();
  }
    detailTrends:any; lastWeek:any; lastWeekCollection:any; lstWekData:any; lstWekShoppers:any; lstWekTarget:any;                                  
     tdy:any; tdyCollection:any; tdyData:any;
     graphArea:any; graphCollection:any; areaGraphData:any;
    mapjson (){
         // today
        this.data = Object.entries(this.navParams.data);
        this.detailTrends = Object.entries(this.data[5][1][0]);

        this.lastWeek = Object.entries(this.detailTrends[0][1])[2];
        this.lastWeekCollection = Object.entries(this.lastWeek[1]);
        this.lstWekData = Object.entries(this.lastWeekCollection[1][1]);

        this.tdy = Object.entries(this.detailTrends[1][1])[2];
        this.tdyCollection = Object.entries(this.tdy[1]);
        this.tdyData = Object.entries(this.tdyCollection[1][1]);

        this.graphArea = Object.entries(this.detailTrends[2][1])[2];
        this.graphCollection = Object.entries(this.graphArea[1]);
        this.areaGraphData = Object.entries(this.graphCollection[1][1]);
        // this.areaGraphData = Object.keys(this.dataObject);

        //  console.log(this.areaGraphData, "areaGraphData");
         // console.log(this.lstWekData, "lstWekShoppers");
            // console.log(this.tdyData, "tdy");
        this.cardName = Object.entries(this.data[0]);
        // console.log(this.cardName[1][1], "cardName");    
        this.cdr.detectChanges();
    }
    processAreaChart(whereToPut){
        for (var i in this.areaGraphData) {
                  // console.log(this.tdy, 'tdy');
              if (this.areaGraphData.hasOwnProperty(i) || typeof(this.areaGraphData[i])!='object') {
                  var test = this.areaGraphData[i];
                  // console.log(test, 'test')
                  for(var test_val in test){
                      if(typeof(test[test_val])!='object' ){
                       this.title=test[test_val]; // prints title
                      // console.log(this.title,'titlettt');
                    }
                    else{
                    //    console.log(test[test_val],'test[test_val]');
                        this.users = Object.keys(test[test_val]);
                       this.values = Object.values(test[test_val]);
                     // console.log(this.users,'value', this.values);
                        var bulletStackData = [this.users, this.values]; //this.areaActualValue;                            
                        this.renderAreaGraph(whereToPut, bulletStackData);
                    }
                  }//for(var test_val in test)
                }
              }
    }
    renderAreaGraph(whereToPut, whatToPut){
                c3.generate({
        bindto: whereToPut,
        data: {
        columns: whatToPut,
 
        // types: {
        //     data1: 'area',
        //     data2: 'area-spline'
        // },
        type: 'line',
        //     colors: {
        //       data1: '#ff0000', data2: '#ff9900'
        //   }
        },
        legend: {
            show: false
        }
        });
    }
    processBulletGraph(whereToPut, whichWeekData, projectedValue, targetValue, actualValue,lastweek ){
        // console.log(whichWeekData,'whichWeekData');
  
        for (var i in whichWeekData) {
            if (whichWeekData.hasOwnProperty(i)) {
                var test = whichWeekData[i];
                // console.log(test, "test");
                // var data_graph=test[1][1];
                // var counter =0
                for(var test_val in test){
                if(typeof(test[test_val])!='object' ){
                      this.title=test[test_val]; // prints title
                    //   console.log(this.title,'title');
                }
                else{
                    // console.log(test[test_val],'test[test_val]');
                            var arr_object=test[test_val];
                        if(typeof (arr_object)=='object' ){ // loop for date  inside object something like 15/11
                            for(var new_visit in arr_object ){
                                // console.log(arr_object[new_visit],new_visit,'data and key');
                                var arr_object1=arr_object[new_visit];
                                // console.log(arr_object1,'arr_object12',typeof arr_object1);
                            if(typeof (arr_object1)!='object' ){ 
                                // var count1=0;  var count2=0;

                                if (typeof arr_object1=='string') {
                                    //  console.log(this.title,'title44');                                    
                                    arr_object1=  arr_object1.slice(0, -1); 
                                    // console.log(arr_object1,'arr_object12',typeof arr_object1);
                                    
                                           this.renderCardData(arr_object1, projectedValue, targetValue, actualValue );
                                }
                                else if(typeof arr_object1=='number'){
                                        // console.log(this.title,'title45');
                                           this.renderCardData(arr_object1, projectedValue, targetValue, actualValue );
                                }
                            }
                                //    console.log(this.title,'title444',typeof this.title);
                               
                    
                            }  
                        }//if(typeof(arr_object1)=='object' )
                }
              }
            }
        }
                        if(lastweek=="lastWeek"){
                                if(targetValue.length>0){
                                   for (var m = 0; m < targetValue.length; m++) {
                                        var bulletStackData1 = [{"ranges":[0,0 ,0], "measures":[actualValue[m] ],	  "markers":[targetValue]  }];
                                        //  console.log(whereToPut,'whereToPut');
                                        if(whereToPut=='#bulletLast'){
                                            var  graphLen=document.getElementsByClassName('bulletLastGraph').length;
                                            whereToPut=document.getElementsByClassName('bulletLastGraph')[graphLen-1];
                                        }
                                    this.renderBulletChart(whereToPut, bulletStackData1);
                                }
                            }
                        }
                        if(projectedValue.length>0){
                            for (var j = 0; j < projectedValue.length; j++) {
                                var bulletStackData = [{"ranges":[0,projectedValue[j] ,0], "measures":[actualValue[j] ],	  "markers":[targetValue]  }];
                                // console.log(whereToPut,'whereToPut');
                                if(whereToPut=='#bulletLast'){
                                    var  graphLen1=document.getElementsByClassName('bulletLastGraph').length;
                                    whereToPut=document.getElementsByClassName('bulletLastGraph')[graphLen1-1];
                                }
                                this.renderBulletChart(whereToPut, bulletStackData);
                            }
                        }//if(this.array2.length>0){ 
                        //   console.log('testedEnd');
    }
    renderCardData(objectArray, outputProjected, outputTarget, outputActual){
                  var count1=0;var count3 =0; var count2=0;                              
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
    renderTdyWeekData(){
        for (var i in this.tdyData) {
            if (this.tdyData.hasOwnProperty(i)) {
                var test = this.tdyData[i];
                // console.log(test, "test");
                // var data_graph=test[1][1];
                // var counter =0
                for(var test_val in test){
                if(typeof(test[test_val])!='object' ){
                      this.title=test[test_val]; // prints title
                    //   console.log(this.title,'title');
                }
                else{
                    // console.log(test[test_val],'test[test_val]');
                    var arr_object=test[test_val];
                    if(typeof(arr_object)=='object' ){ // loop for date  inside object something like 15/1
                        for(var new_visit1 in arr_object ){
                        // console.log(this.title,'title444');
                            if(this.title.indexOf('Projected')!==-1){
                                this.tdyArray1 =arr_object[new_visit1];
                                    if(typeof this.tdyArray1=='number'){
                                            this.tdyArray1 = this.kFormatter(this.tdyArray1);
                                    }
                            }
                            else if(this.title.indexOf('Target')!==-1) {
                                        this.tdyArray2=arr_object[new_visit1];
                                            if(typeof this.tdyArray2=='number'){
                                                    this.tdyArray2 = this.kFormatter(this.tdyArray2);
                                            }
                            }
                            else{
                                        this.tdyArray3=arr_object[new_visit1];
                                            if(typeof this.tdyArray3=='number'){
                                                    this.tdyArray3 = this.kFormatter(this.tdyArray3);
                                            }
                            }
                        // console.log(arr_object[new_visit1],new_visit1,'data and key2',count1); // data points   
                        }
                            // console.log(this.tdyArray1,"aray1",this.tdyArray2,'Array2', this.tdyArray3, "array3"); // data points
                    }
                }
              }
            }
        }
    }
    renderLastWeekData(){
        for (var i in this.lstWekData) {
            if (this.lstWekData.hasOwnProperty(i)) {
                var test = this.lstWekData[i];
                // console.log(test, "test");
                // var data_graph=test[1][1];
                // var counter =0
                for(var test_val in test){
                if(typeof(test[test_val])!='object' ){
                      this.title=test[test_val]; // prints title
                    //   console.log(this.title,'title');
                }
                else{
                    // console.log(test[test_val],'test[test_val]');
                    var arr_object=test[test_val];
                    if(typeof(arr_object)=='object' ){ // loop for date  inside object something like 15/1
                        for(var new_visit1 in arr_object ){
                        // console.log(this.title,'title444');
                            if(this.title.indexOf('Projected')!==-1){
                                this.lstArray1 =arr_object[new_visit1];
                                    if(typeof this.lstArray1=='number'){
                                            this.lstArray1 = this.kFormatter(this.lstArray1);
                                    }
                            }
                            else if(this.title.indexOf('Target')!==-1){
                                this.lstArray2=arr_object[new_visit1];
                                    if(typeof this.lstArray2=='number'){
                                            this.lstArray2 = this.kFormatter(this.lstArray2);
                                    }
                            }
                            else{
                                this.lstArray3=arr_object[new_visit1];
                                    if(typeof this.lstArray3=='number'){
                                            this.lstArray3 = this.kFormatter(this.lstArray3);
                                    }         
                            }
                        // console.log(arr_object[new_visit1],new_visit1,'data and key2',count1); // data points   
                        }
                            // console.log(this.lstArray1,"aray1",this.lstArray2,'this.array2'); // data points
                    }
                }
              }
            }
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
