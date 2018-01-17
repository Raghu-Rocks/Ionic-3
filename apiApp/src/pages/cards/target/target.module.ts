import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargetPage } from './target';

@NgModule({
  declarations: [
    TargetPage,
  ],
  imports: [
    IonicPageModule.forChild(TargetPage),
  ],
  exports: [
    TargetPage
  ]
})
export class TargetPageModule {}
