import { IBannerInfo } from 'app/shared/ibanner-info';
import {
  Component,
  Input,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: '[app-home-banner]',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnChanges {

  readonly CHANGE_TYPE_BREAKPOINT: number = 1024;
  readonly IMAGE_TYPE: string = 'image';
  readonly VIDEO_TYPE: string = 'video';

  /**
   * Check if the browser is SAFARI
   * If it is, set this to true
   */
  isSafariOrEdge = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);

  @Input() title: string;
  @Input() subtitle: string;

  @Input() info: IBannerInfo;
  @Input() isActiveSlide: boolean;

  @ViewChild('videoElement') videoElement: ElementRef;


  constructor(private fullpageService: MnFullpageService) {}

  ngOnChanges() {
    if (this.isActiveSlide) {
      this.videoElement.nativeElement.play();
    }
  }
}
