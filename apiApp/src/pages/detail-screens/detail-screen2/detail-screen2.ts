import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the DetailScreen2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-screen2',
  templateUrl: 'detail-screen2.html',
})
export class DetailScreen2Page {
    @ViewChild(Slides) slides: Slides;
    public hero: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

// ngOnInit(){
 ngAfterViewInit(){
    this.slides.freeMode = true;
    this.hero = this.navParams.get("hero");
}
  goToPrevSlide() {
    this.slides.slidePrev();
  }

  goToNextSlide() {
    this.slides.slideNext();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailScreen2Page');
  }
  

}
