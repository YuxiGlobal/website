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
  
  constructor(private fullpageService: MnFullpageService) { }

  ngOnInit() {
    this.fullpageService.destroy('all');
  }

}
