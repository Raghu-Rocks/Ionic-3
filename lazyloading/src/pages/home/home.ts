import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {-
    console.log('ionViewDidLoad HomePage');
  }
  navigateToAboutPage(){
    this.navCtrl.push("AboutPage")
  }

  openModal(){

  const myData = {
    name: 'Raghu',
    occupation: "Developer"
  };

   const myModal = this.modal.create("ModalPage", {data: myData});
   myModal.present();
  }
}
