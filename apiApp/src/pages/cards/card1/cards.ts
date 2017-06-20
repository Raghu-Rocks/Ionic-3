import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';

@IonicPage()
@Component({
  selector: 'card1-design',
  templateUrl: 'cards.html',
    providers: [PeopleServiceProvider]
})

export class Card1Page {
  
  @Input() hero: PeopleServiceProvider;
  @Input('master') masterName: string;
  constructor(public navCtrl: NavController, public peopleServiceProvider: PeopleServiceProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }
  loadPeople(){
  this.peopleServiceProvider.load()
  .then(data => {
        this.hero= data;
        // console.log(this.hero,'this.hero',data,'data');
        // this.processCard(this.people);
  });
}
  navigateToDetailPage(){
    this.navCtrl.push("DetailScreen1Page", this.hero)
    console.log(this.hero, "hero")
  }
}
