import { NgModule,NO_ERRORS_SCHEMA,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule, } from 'ionic-angular';
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
  ],
  schemas: [ NO_ERRORS_SCHEMA,  CUSTOM_ELEMENTS_SCHEMA ]
})
export class DetailScreen1PageModule {}
