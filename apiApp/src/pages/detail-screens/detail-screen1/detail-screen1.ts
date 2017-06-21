import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the DetailScreen1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-screen1',
  templateUrl: 'detail-screen1.html',
})
export class DetailScreen1Page {
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
// goBack() {
//     this.navCtrl.pop();
// }
ionViewDidLoad() {
    console.log('ionViewDidLoad DetailScreen1Page', this.hero);
  }
}
