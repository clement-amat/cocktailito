import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SliderComponent } from './slider/slider.component';
import { SwiperModule} from 'ngx-swiper-wrapper';
import { RecommendationComponent } from './recommendation/recommendation.component';
import {MyHammerConfig} from './config/hammer-configuration';


const routes = [
  {path: 'detail/:id', component: DetailComponent, data: {animation: 'Details'}},
  {path: '**', component: HomeComponent, data: {animation: 'Home'}}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    SliderComponent,
    RecommendationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
