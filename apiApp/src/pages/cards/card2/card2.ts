import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';
// import { HomePage } from '../../home/home';
import * as c3 from 'c3';  



/**
 * Generated class for the Card2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'card2-design',
  templateUrl: 'card2.html',
  providers: [PeopleServiceProvider]

})
export class Card2Page {
  
  @Input() hero2:any = PeopleServiceProvider;
  @Input('index') card_index:any;
  @Input('master') masterName: string;
  @ViewChild ('#dashboardCharts')dashboardChart: ElementRef;
    public  nullArray = [];
    public  notNullArray = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public peopleServiceProvider: PeopleServiceProvider) {
    
  
  }
ngAfterViewInit() {
//   console.log(this.card_index,'card_index1');
   // let dashboardChartArea = this.dashboardChart.nativeElement;
   this.mapjson ();

    c3.generate({
        bindto: "#dashboardChart"+this.card_index,
        data: {
            type: 'donut',
            columns: [
                ['Under 18', 50],
                ['Above 18', 50]
            ]
        },
        legend: {
            show: false
        },
        size: {
        height: 120
    },
        donut: {
            title: "Age"
        }
    });
}


//   loadPeople(url){
//   this.peopleServiceProvider.load(url)
//   .then(data => {
//         this.hero2= data;
//         // console.log(this.hero,'this.hero',data,'data');
//         // this.processCard(this.people);
//   });
// }
  navigateToDetailPage(){
    this.navCtrl.push("DetailScreen2Page", this.hero2)
  //  console.log(this.hero2, "hero")
}

public keyValue:any;

  mapjson (){
   // let json = this.hero2;
 //  console.log("inside mapjon start");
  //  console.log(JSON.parse(JSON.stringify( this.hero2)));
  //    console.log("inside mapjon end");
  //    let array = this.hero2;
//debugger;

  for (var index = 0; index < this.hero2.collection.length; index++) {
      // console.log("INDEX ="+index);
      let data:any =  this.hero2.collection[index];
    //  console.log( this.hero2.collection[index]);
      //  let suraj = Object.entries(data );
      //  console.log("lkdsjfsd =" + suraj);
  }
  

  let raghu = Object.entries(this.hero2.collection[0])
    // console.log("raghu =" + Object.entries(this.hero2.collection[0]));
    let suraj = Object.entries(raghu[2][1]);
    // console.log("suraj =" +  suraj[0][1]);
    //  let suarabh =suraj[0][1];
      // console.log("suarabh =" +  suarabh[0][0]);

    let suarabh =  Object.entries(suraj[0][1]); 
    // console.log("suarabh =" +  suarabh[0][1]);

  let gst = Object.entries( suarabh[0][1]);

  console.log("gst =" +  gst[2]);
    
    
    
    
       //  console.log("raghu =" + Object.entries(this.hero2.collection[1] ));
  //  let objs = Object.keys(json).map(key => json[key]); 
 //   console.log(objs, "object json");
    // var filters = [{"user":"abc"},{"application":"xyz"}];
    // for (let key in filters){
    //     console.log( key + ": " + filters[key], "key");
    // }
  }

myArray = [];
for (anObject = this.hero2) { 
   this.myArray.push(anObject)
}


}
