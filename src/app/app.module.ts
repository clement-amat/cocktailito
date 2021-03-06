import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListComponent } from '../components/list/list';
import { DetailComponent } from '../components/detail/detail';
import { SearchPage } from '../pages/search/search';
import { Keyboard } from '@ionic-native/keyboard';
import { CocktailServiceProvider } from '../providers/cocktail-service/cocktail-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListComponent,
    DetailComponent,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListComponent, 
    DetailComponent,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Keyboard,
    CocktailServiceProvider
  ]
})
export class AppModule {}
