import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { HttpModule } from '@angular/http';
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
    LoginPageModule,
    IonicStorageModule.forRoot( {name: '_DMAAPP',
         driverOrder: ['indexeddb', 'sqlite', 'websql']})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider,
    NotificationProvider,
    SocialSharing,
    Screenshot
  ],
})
export class AppModule {}
