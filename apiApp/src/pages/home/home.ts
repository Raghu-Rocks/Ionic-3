import { Component, ViewChild, ElementRef, Output } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';

// import { Card1Page } from '../../pages/cards/card1/cards';
// import { Card2Page } from '../../pages/cards/card2/card2';
// import * as c3 from 'c3';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})

export class HomePage {
 @Output('card') card:any;
 @ViewChild ('dashboardChart') dashboardChart: ElementRef;
  public people: any;
  public bgimg: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public peopleServiceProvider: PeopleServiceProvider,
    public menu: MenuController) {
        // this.bgimg = 'images/background.png';
        // style="background: url('{{bgimg}}')"
       // this.loadPeople('https://api.myjson.com/bins/14oa07');
       this.loadPeople('assets/data.json');
    }



loadPeople(url:any){ 
  this.peopleServiceProvider.load(url)
  .then(data => {
        this.people= data;
        // console.log(this.people,'this.people',data,'data');
        // this.processCard(this.people);
  });
}


}
