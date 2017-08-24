import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class DetailScreen2PageModule {}
