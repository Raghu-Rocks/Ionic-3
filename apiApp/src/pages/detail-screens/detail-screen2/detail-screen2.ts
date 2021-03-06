import { Component, ViewChild, ElementRef,ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
// import * as c3 from 'c3';  
declare var d3: any;


@IonicPage()
@Component({
  selector: 'page-detail-screen2',
  templateUrl: 'detail-screen2.html',
})
export class channels {
    @ViewChild(Slides) slides: Slides;
    showGraph:number = 0;
    // @Input('index') card_index:any;
    @ViewChild ("bulletChart")bulletCharts: ElementRef;
    data: any;    cardName:any;    detailBulletData:any; lastYear:any;
    title:any;    actualValue:any =[];    projectedValue:any =[];
    tdyProjectedFormated:any = []; tdyActualFormted:any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private screenshot: Screenshot,
    private socialSharing: SocialSharing,
    private cdr: ChangeDetectorRef) {
        this.navParams.get("hero");

  }
    ngAfterViewInit(){
        this.mapjson ();
        this.processDetailBullet();
        this.lastWeekVisitsData();
    }
  navigateToHome(){
        this.navCtrl.popToRoot();
  }
  navigateToAbout(){
    //   console.log(this.navParams.data.last_refreshed, 'raghu1');
    let lastRefreshed = this.navParams.data.last_refreshed;
    this.navCtrl.push("AboutPage", lastRefreshed);
  }
      shareSheetShare() {
    // this.screenShotURL() ;
      // this.screenshot.save('jpg', 100, "pic" +this.screenCount).then(res => {
      //   this.screen = res.filePath;
      var screen
    this.screenshot.URI(80).then(res => {
      screen = res.URI;
      console.log(screen, 'path');
    //   console.log(screen);
      this.socialSharing.share(null, null, screen, null).then(() => {
      console.log("shareSheetShare: Success");
      }).catch((Error) => {
      console.error("shareSheetShare: failed"+ Error);
    });

    });
    // console.log(this.screen, 'screen')
  }

    detailTrends:any; collection:any; collectionArray:any;collectionData:any; collectionDataVisits:any; tdyVisits:any; tdyVisitsKeys:any;
    tdyVisitsValues:any;
    lstWeekCollection:any; lstWeekCollectionArray:any; lastWeekData:any; lastWeekDataVisits:any; lastWeekVisitsObject:any;
    lastWeekVisitsValue:any; lastWeekVisits:any = [];
    mapjson (){
      // today
      var arr:string;
       arr= this.navParams.data.detail_trends[0][0].name;
      this.lastYear = arr.split('-');
      // console.log(this.lastYear, 'console')
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


      //last week data
      this.lstWeekCollection = Object.entries(this.detailTrends[1][0])[0][1];
      this.lstWeekCollectionArray = Object.entries(this.lstWeekCollection)[2];
      this.lastWeekData = Object.entries(this.lstWeekCollectionArray[1])[1][1];
      this.lastWeekDataVisits = Object.entries(this.lastWeekData)[0][1];
      this.lastWeekVisitsObject = Object.entries(this.lastWeekDataVisits)[0][1];
      this.lastWeekVisitsValue = Object.values(this.lastWeekVisitsObject);
      // console.log(this.lastWeekVisitsValue, "lstWeekCollection");
      // console.log(this.detailBulletData, "detailBulletData");
      this.cdr.detectChanges();
    }
  lastWeekVisitsData(){
      for (var index = 0; index < this.lastWeekVisitsValue.length; index++) {
        this.lastWeekVisits[index] = this.kFormatter(this.lastWeekVisitsValue[index]);
     // return this.lastWeekVisits;
      }
        // console.log(this.lastWeekVisits, 'lastWeekVisits');
    
  }
  processDetailBullet(){
        for (var i in this.detailBulletData) {
        if (this.detailBulletData.hasOwnProperty(i)) {
            var test = this.detailBulletData[i];
            // var data_graph=test[1][1];
            // var counter =0
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
                          this.tdyProjectedFormated[count1] = this.kFormatter(arr_object1[new_visit1]);
                        // console.log(this.title,'title444');
                          count1++;
                        }
                        else{
                            this.actualValue[count2] =arr_object1[new_visit1];

                            this.tdyActualFormted[count2] = this.kFormatter(arr_object1[new_visit1]);
                            // console.log(this.title,'title555');  
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
                        // console.log(this.projectedValue.length,"P Value length");
                      if(this.projectedValue.length != -1){
                        // console.log(this.actualValue,"actualValue",this.projectedValue,'projectedValue');
                        // console.log(this.actualValue.length,"actualValue length");
                        for (var j = 0; j < this.actualValue.length; j++) {
                          var bulletStackData1 = [{"ranges":[0, this.projectedValue[j], 0], "measures":[this.actualValue[j] ],	  "markers":[0]  }];
                          var bulletStackData2 = [{"ranges":[0, 0, 0], "measures":[this.lastWeekVisitsValue[j] ],	  "markers":[0]  }];
                          var divId1 = "#detailBullet"+this.actualValue[j]+j;
                          this.renderBulletChart(divId1, bulletStackData1); // detail normal bullet 
                          var divId2 = "#detailTdyBullet"+this.actualValue[j]+j;// card tdy bullet
                          this.renderBulletChart(divId2, bulletStackData1);// card tdy bullet
                          var divId3 = "#lastWeekBullet"+this.actualValue[j]+j;//card last week bullet
                          this.renderBulletChart(divId3, bulletStackData2);// card last week bullet
                        // console.log(bulletStackData1,"bulletStackData1", bulletStackData2, 'bulletStackData2');
                          
                        }
                    }//if(this.array2.length>0){
                        // console.log(this.tdyActualFormted,"actualValue", this.tdyProjectedFormated, 'tdyVisitsKeys');
                        // console.log(bulletStackData1,"bulletStackData1", bulletStackData2, 'bulletStackData2');
  }

  renderBulletChart(WhereToPut, whatToPut) {
     // Variables required for bullet chart are listed here
      var bulletParentWidth; var chart; var margin; var width; var height;

      bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
      margin = {top: 0, right: 3, bottom: 0, left: 0};
      width = bulletParentWidth -margin.left - margin.right;    
      height = 20 - margin.top - margin.bottom;
      chart = d3.bullet()
    .width(width)
    .height(height)
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
            d3.selectAll('.bullet .measure.s0').attr('rx', 4);
            d3.selectAll('.bullet .measure.s0').attr('ry', 4);
            d3.selectAll('.bullet .measure.s0').attr('x', -4);
            d3.selectAll('.bullet .range.s0').attr('x', -4);
            d3.selectAll('.bullet .range.s0').attr('rx', 8);
            d3.selectAll('.bullet .range.s0').attr('ry', 8);
            d3.selectAll('.hide-target .bullet .marker').style('stroke', "transparent");

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
        if (num > 999999) {
            return (num / 1000000).toFixed(2) + 'M';
        } else {
            return num > 999 ? (num / 1000).toFixed(2) + 'k' : num.toFixed(2);
        }
    }
      showParticularGraph(graphId){
        this.showGraph=graphId
      }

}
