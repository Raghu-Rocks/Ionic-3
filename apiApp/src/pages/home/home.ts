import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';
import { Card1Page } from '../../pages/cards/card1/cards';
import { Card2Page } from '../../pages/cards/card2/card2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})

export class HomePage {
  master = 'Master';
  public people: any;

  
  constructor(
    public navCtrl: NavController, 
    public peopleServiceProvider: PeopleServiceProvider,
    public navParams: NavParams,
    public menu: MenuController) {
        this.loadPeople();
    }



loadPeople(){
  this.peopleServiceProvider.load()
  .then(data => {
        this.people= data;
        // console.log(this.people,'this.people',data,'data');
        // this.processCard(this.people);
  });
}
// processCard(dummydata){
// console.log(dummydata);
// console.log(dummydata[0]);
// for (var i = 0; i < dummydata.length; i = i+1 ) {
//   var element = dummydata[i];
// }
// }



}
