import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage} from '../pages/home/home';
import { Card1Page } from '../pages/cards/card1/cards';
import { BulletPage } from '../pages/bullet/bullet';
import { Card2Page } from '../pages/cards/card2/card2';
// import { DetailScreen1Page } from '../pages/detail-screens/detail-screen1/detail-screen1';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { C3providerProvider } from '../providers/c3provider/c3provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Card1Page,
    Card2Page,
    BulletPage
    // DetailScreen1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    // DetailScreen1Page
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider,
    C3providerProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
