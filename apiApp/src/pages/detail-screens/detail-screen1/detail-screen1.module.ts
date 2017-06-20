import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailScreen1Page } from './detail-screen1';

@NgModule({
  declarations: [
    DetailScreen1Page,
  ],
  imports: [
    IonicPageModule.forChild(DetailScreen1Page),
  ],
  exports: [
    DetailScreen1Page
  ]
})
export class DetailScreen1PageModule {}
