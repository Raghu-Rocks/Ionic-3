import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulletPage } from './bullet';

@NgModule({
  declarations: [
    BulletPage,
  ],
  imports: [
    IonicPageModule.forChild(BulletPage),
  ],
  exports: [
    BulletPage
  ]
})
export class BulletPageModule {}
