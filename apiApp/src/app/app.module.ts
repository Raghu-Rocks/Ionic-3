import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
// import { AboutPageModule } from '../pages/about/about.module';
import { LoginPageModule } from '../pages/login/login.module';
import { HttpModule } from '@angular/http';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
// import { C3providerProvider } from '../providers/c3provider/c3provider';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { NotificationProvider } from '../providers/notification/notification';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { IonicStorageModule } from '@ionic/storage';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e33b9ce9 '
  },
  'push': {
    'sender_id': '488908667368',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },

      'android': {
        'iconColor': '#343434'
      }
    }
  }
};
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    HttpModule,
    HomePageModule,
    // AboutPageModule,
    LoginPageModule,
    IonicStorageModule.forRoot( {name: '_DMAAPP',
         driverOrder: ['indexeddb', 'sqlite', 'websql']})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  // exports: [HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider,
    // C3providerProvider,
    NotificationProvider,
    SocialSharing,
    Screenshot
 
    
    
  ],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
