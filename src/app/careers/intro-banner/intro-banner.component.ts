import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-intro-banner',
  templateUrl: './intro-banner.component.html',
  styleUrls: ['./intro-banner.component.scss']
})
export class IntroBannerComponent implements OnInit {
  public carouselOne: NgxCarousel;
  
   ngOnInit() {
     this.carouselOne = {
       grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
       slide: 1,
      
       point: {
         visible: true
       },
       load: 2,
       touch: true,
       loop: true,
       custom: 'banner'
     }
   }
}
