import { ShowOverlayService } from './../shared/services/show-overlay.service';
import { IAdvantagesInfo } from 'app/shared/iadvantages-info';
import { BANNERS_INFO, SERVICES_INFO, ADVANTAGES_INFO } from './../shared/website-info';
import { Component } from '@angular/core';
import { IBannerInfo } from 'app/shared/ibanner-info';
import { IServiceInfo } from 'app/shared/iservices-info';
import { NavigationService } from 'app/shared/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  bannersInfo: IBannerInfo[];
  servicesInfo: IServiceInfo[];
  advantagesInfo: IAdvantagesInfo[];
  showOverlay = false;
  activeSlide;

  constructor(
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService
  ) {
    this.bannersInfo = BANNERS_INFO;
    this.servicesInfo = SERVICES_INFO;
    this.advantagesInfo = ADVANTAGES_INFO;
  }

  // Adding new class syntax because we were losing context
  // 'this' was referencing fullPage instead of HomeComponent
  // https://babeljs.io/docs/plugins/transform-class-properties/
  onSlideChange = (anchorLink, index) => {
    this.activeSlide = index;
  }

  openOverlay() {
    this.showOverlay = !this.showOverlay;
    this.showOverlayService.preventScroll = !this.showOverlayService.preventScroll;
  }

  closeOverlay() {
    this.showOverlay = false;
    this.showOverlayService.preventScroll = false;
  }

  resetNavigationValue() {
    this.navigationService.resetNav = false;
  }
}
