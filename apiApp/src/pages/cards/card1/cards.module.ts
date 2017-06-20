import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Card1Page } from './cards';

@NgModule({
  declarations: [
    Card1Page,
  ],
  imports: [
    IonicPageModule.forChild(Card1Page),
  ],
  exports: [
    Card1Page
  ]
})
export class CardsPageModule {}
