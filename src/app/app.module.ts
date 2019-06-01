import { BrowserModule } from '@angular/platform-browser';
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


const routes = [
  {path: 'details', component: DetailComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
