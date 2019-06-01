import { Component, OnInit } from '@angular/core';
import {SwiperConfigInterface, SwiperPaginationInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
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

  ngOnInit(): void {
    this.slides = ['assets/stub/cocktail1.png', 'assets/stub/cocktail2.png'];
  }


}
