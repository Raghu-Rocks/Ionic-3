import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { NvD3Component } from 'ng2-nvd3';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { Card1Page } from '../pages/cards/card1/cards';
import { BulletPage } from '../pages/bullet/bullet';
import { Card2Page } from '../pages/cards/card2/card2';
// import { NotificationPage } from '../pages/notification/notification';

// import { DetailScreen1Page } from '../pages/detail-screens/detail-screen1/detail-screen1';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { C3providerProvider } from '../providers/c3provider/c3provider';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { NotificationProvider } from '../providers/notification/notification';

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
    // NvD3Component,
    HomePage,
    Card1Page,
    Card2Page,
    BulletPage
  //  NotificationPage
    // DetailScreen1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
    // DetailScreen1Page
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider,
    C3providerProvider,
  NotificationProvider,
 
    
    
  ],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
