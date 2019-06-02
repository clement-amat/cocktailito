import { Component, OnInit } from '@angular/core';
import {SwiperConfigInterface, SwiperPaginationInterface} from 'ngx-swiper-wrapper';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 0,
      })),
      state('closed', style({
        opacity: 1,
      })),
      transition('open => closed', [
        style({transform: 'translateY(50%)'}),
        animate('0.4s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class SliderComponent implements OnInit {

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: this.pagination,
  };

  public slides: any[];
  public index = 0;

  ngOnInit(): void {
    this.slides = ['assets/stub/cocktail1.png', 'assets/stub/cocktail2.png'];
  }
}
