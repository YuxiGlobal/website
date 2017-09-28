import { ShowOverlayService } from './../services/show-overlay.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  hideNav: boolean = false;
  showOverlay = false;

  constructor(private showOverlayService: ShowOverlayService) {  }

  handleMenuClick() {
    this.showOverlay = !this.showOverlay;
    this.showOverlayService.preventScroll = !this.showOverlayService.preventScroll;
    this.hideNav = false;
  }

  mouseWheelUpFunc(event: any) {
    if (!this.showOverlayService.preventScroll) {
      this.hideNav = false;
    }
  }

  mouseWheelDownFunc(event: any) {
    if (!this.showOverlayService.preventScroll) {
      this.hideNav = true;
    }
  }
}
