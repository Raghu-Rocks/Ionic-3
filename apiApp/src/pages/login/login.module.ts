import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicStorageModule.forRoot( {name: '_DMAAPP',
         driverOrder: ['indexeddb', 'sqlite', 'websql']})
  ],
  exports: [
    LoginPage
  ],
  providers: [InAppBrowser]
})
export class LoginPageModule {}
