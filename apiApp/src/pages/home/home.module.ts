import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CardsPageModule } from '../cards/card1/cards.module';
import { Card2PageModule } from '../cards/card2/card2.module';
import { TargetPageModule } from '../cards/target/target.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    CardsPageModule,
    Card2PageModule,
    TargetPageModule
    
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
