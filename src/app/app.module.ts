import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';

import { NintendoEshopProvider } from '../providers/nintendo-eshop/nintendo-eshop';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DatabaseServiceProvider } from '../providers/database-service/database-service';

import { GamesPage } from '../pages/games/games';
import { GameDetailPage } from '../pages/game-detail/game-detail';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { firebaseConfig } from '../config';
import { MyGamesPage } from '../pages/my-games/my-games';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GamesPage,
    GameDetailPage,
    LoginPage,
    MyGamesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GamesPage,
    GameDetailPage,
    LoginPage,
    MyGamesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NintendoEshopProvider,
    AuthServiceProvider,
    AngularFireAuth,
    DatabaseServiceProvider
  ]
})
export class AppModule {}
