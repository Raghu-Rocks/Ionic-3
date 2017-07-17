import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { channels } from './detail-screen2';

@NgModule({
  declarations: [
    channels,
  ],
  imports: [
    IonicPageModule.forChild(channels),
  ],
  exports: [
    channels
  ]
})
export class DetailScreen2PageModule {}
