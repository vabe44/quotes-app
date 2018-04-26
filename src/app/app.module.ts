import { SettingsService } from './../services/settings';
import { QuotesService } from './../services/quotes';
import { SettingsPage } from './../pages/settings/settings';
import { FavoritesPage } from './../pages/favorites/favorites';
import { QuotesPage } from './../pages/quotes/quotes';
import { LibraryPage } from './../pages/library/library';
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
import { QuotePage } from '../pages/quote/quote';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    FavoritesPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    FavoritesPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    SettingsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
