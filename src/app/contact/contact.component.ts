import { Component, OnInit } from '@angular/core';
import { ShowOverlayService } from 'app/shared/services/show-overlay.service';
import { NavigationService } from 'app/shared/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showOverlay = false;
  activeSlide;
  
  constructor(
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService
  ) { }

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

}
