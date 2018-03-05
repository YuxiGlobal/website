import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-testimonial-banner',
  templateUrl: './testimonial-banner.component.html',
  styleUrls: ['./testimonial-banner.component.scss']
})
export class TestimonialBannerComponent implements OnInit {

  public carouselOne: NgxCarousel;
  
  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
     
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }
}
