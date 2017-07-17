import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { summary } from './detail-screen1';

@NgModule({
  declarations: [
    summary,
  ],
  imports: [
    IonicPageModule.forChild(summary),
  ],
  exports: [
    summary
  ]
})
export class DetailScreen1PageModule {}
