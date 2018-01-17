import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargetDetailPage } from './target-detail';

@NgModule({
  declarations: [
    TargetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TargetDetailPage),
  ],
  exports: [
    TargetDetailPage
  ]
})
export class TargetDetailPageModule {}
