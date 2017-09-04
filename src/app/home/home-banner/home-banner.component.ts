import { IBannerInfo } from 'app/shared/ibanner-info';
import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: '[app-home-banner]',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  readonly CHANGE_TYPE_BREAKPOINT: number = 1024;
  readonly IMAGE_TYPE: string = 'image';
  readonly VIDEO_TYPE: string = 'video';
  @Input() info: IBannerInfo;


  constructor(private fullpageService: MnFullpageService) {
  }

  ngOnInit() {
    this.fullpageService.destroy('all');
  }


}
