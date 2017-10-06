import { Component, OnInit } from '@angular/core';
import { ShowOverlayService } from 'app/shared/services/show-overlay.service';
import { NavigationService } from 'app/shared/services/navigation.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent {
  showOverlay = false;
  activeSlide;

  constructor(
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService
  ) {  }

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
