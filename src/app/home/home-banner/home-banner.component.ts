import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MnFullpageService } from "ngx-fullpage";
import { MnFullpageOptions } from 'ngx-fullpage';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: '[app-home-banner]',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {
  @Input()
  info;
  ShowMedia: string ='image';
  constructor(private fullpageService: MnFullpageService) { }

  ngOnInit() {
    this.detectedWidth(window.screen.width)
    this.fullpageService.destroy('all');
  }
  detectedWidth(size){
    
    console.log(size)
    if(size > 1024){
        this.ShowMedia = 'image'
       }else{
        this.ShowMedia = 'image'
     }
      return this.ShowMedia ;
  }

}
