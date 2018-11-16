import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GamesPage } from '../pages/games/games';
import { NintendoEshopProvider } from '../providers/nintendo-eshop/nintendo-eshop';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailPage } from '../pages/game-detail/game-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamesPage,
    ListPage,
    GameDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamesPage,
    ListPage,
    GameDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NintendoEshopProvider
  ]
})
export class AppModule {}
