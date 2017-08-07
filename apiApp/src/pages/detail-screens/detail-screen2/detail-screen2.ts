import { Component, ViewChild, Input, ElementRef,ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
// import * as c3 from 'c3';  
declare var d3: any;


@IonicPage()
@Component({
  selector: 'page-detail-screen2',
  templateUrl: 'detail-screen2.html',
})
export class channels {
    @ViewChild(Slides) slides: Slides;
    // @Input('index') card_index:any;
    @ViewChild ("bulletChart")bulletCharts: ElementRef;
    data: any;
    cardName:any;
    detailBulletData:any;
    title:any;
    actualValue:any =[];
    projectedValue:any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cdr: ChangeDetectorRef) {
        this.navParams.get("hero");

  }
    ngAfterViewInit(){
        this.mapjson ();
        this.processDetailBullet();
        // for (var index = 0; index < this.tdyVisitsValues.length; index++) {
        //   var element = this.tdyVisitsValues[index];
        //   var divId = "#detaiBullet"+element;
        //   this.renderBulletChart(divId);
        // }
    }   
    detailTrends:any; collection:any; collectionArray:any;collectionData:any; collectionDataVisits:any; tdyVisits:any; tdyVisitsKeys:any;
    tdyVisitsValues:any
    mapjson (){
      // today
      this.data = Object.entries(this.navParams.data);
      this.cardName = Object.entries(this.data[0]);
      this.detailTrends = Object.entries(this.data[5])[1];
      // console.log(this.detailTrends, "detailTrends");
      this.collection = Object.entries(this.detailTrends[1][0])[1][1];
      this.collectionArray = Object.entries(this.collection)[2];
      this.collectionData = Object.entries(this.collectionArray[1])[1][1];
      this.collectionDataVisits = Object.entries(this.collectionData)[0][1];
      this.tdyVisits = Object.entries(this.collectionDataVisits)[0][1];
      this.tdyVisitsKeys = Object.entries(this.tdyVisits);
      // this.tdyVisitsKeys = Object.keys(this.tdyVisits);
      this.tdyVisitsValues = Object.values(this.tdyVisits);

      this.detailBulletData = Object.entries(this.collectionData);
      console.log(this.detailBulletData, "detailBulletData");
      this.cdr.detectChanges();
    }

  processDetailBullet(){
        for (var i in this.detailBulletData) {
        if (this.detailBulletData.hasOwnProperty(i)) {
            var test = this.detailBulletData[i];
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
                      var count1=0;  var count2=0;
                    for(var new_visit1 in arr_object1 ){
                        // console.log(arr_object1[new_visit1],new_visit1,'data and key2',count1); // data points
                        // console.log(this.title,'title444');
                        if(this.title.indexOf('Project')!=-1){
                          this.projectedValue[count1] =arr_object1[new_visit1];
                        console.log(this.title,'title444');
                          count1++;
                        }
                        else{
                            this.actualValue[count2] =arr_object1[new_visit1];
                            console.log(this.title,'title555');  
                            count2++;
                        }
                    }

                }//if(typeof(arr_object1)=='object' )
                    }//for(var new_visit in arr_object )
                }
            }
      }
    }
    }
                      if(this.projectedValue.length>0){
                        console.log(this.actualValue,"actualValue",this.projectedValue,'projectedValue');
                        for (var j = 0; j < this.actualValue.length; j++) {
                          var bulletStackData = [{"ranges":[0, this.projectedValue[j], 0], "measures":[this.actualValue[j] ],	  "markers":[270]  }];
                          var divId = "#detaiBullet"+this.actualValue[j];
                          this.renderBulletChart(divId, bulletStackData);
                        }
                    }//if(this.array2.length>0){
  }

  renderBulletChart(WhereToPut, whatToPut) {
     // Variables required for bullet chart are listed here
      var bulletParentWidth; var chart; var margin; var width; var height;

      bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
      margin = {top: 0, right: 3, bottom: 0, left: 0};
      width = bulletParentWidth -margin.left - margin.right;    
      height = 30 - margin.top - margin.bottom;
      chart = d3.bullet()
    .width(width)
    .height(height)
    // .actualColor("#ff0000")
    // .targetColor("#00FF00")
    // .projectedColor("#0000FF")


    var svg = d3.select(WhereToPut).selectAll("svg")
      .data(whatToPut)
      .enter().append("svg")
      .attr("class", "bullet")
    //   .attr("width", "100%")
    //   .attr("height", "auto")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
    //   .attr("transform", "translate(" + this.margin.left + "," +this.margin.top + ")")
      .call(chart);
      d3.selectAll("back-button").on("click", function() {
        svg.datum(this.randomize).call(this.chart.duration(1000)); // TODO automatic transition
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
