import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailScreen2Page } from './detail-screen2';

@NgModule({
  declarations: [
    DetailScreen2Page,
  ],
  imports: [
    IonicPageModule.forChild(DetailScreen2Page),
  ],
  exports: [
    DetailScreen2Page
  ]
})
export class DetailScreen2PageModule {}
