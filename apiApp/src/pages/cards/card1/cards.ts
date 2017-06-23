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
  loadPeople(url){
  this.peopleServiceProvider.load(url)
  .then(data => {
        this.hero= data;
  });
}
  navigateToDetailPage(hero){
    this.navCtrl.push("DetailScreen1Page", hero);
    // console.log(this.hero, "hero");
  }
}
