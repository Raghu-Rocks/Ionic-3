import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { PeopleServiceProvider } from '../../../providers/people-service/people-service';

/**
 * Generated class for the TargetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-target',
  templateUrl: 'target.html',
})

export class TargetPage {
  @Input() hero2:any = PeopleServiceProvider;
  providers: [PeopleServiceProvider]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,    
    public peopleServiceProvider: PeopleServiceProvider,
) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetPage');
  }
  navigateToDetailPage() {
        this.navCtrl.push("TargetDetailPage");
        // this.navCtrl.push("summary", hero);
        // console.log(this.hero, "hero");
  }

}
