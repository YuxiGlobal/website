import { NavigationService } from './../services/navigation.service';
import { ShowOverlayService } from './../services/show-overlay.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  hideNav = false;
  showOverlay = false;

  constructor(
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.showOverlay = this.navigationService.resetNav;
      this.hideNav = this.navigationService.resetNav;
    });

    window.scroll({
      top: 0
    });

   }

  handleMenuClick() {
    this.showOverlay = !this.showOverlay;
    this.showOverlayService.preventScroll = !this.showOverlayService.preventScroll;
    this.hideNav = false;
    this.navigationService.resetNav = false;
  }

  mouseWheelUpFunc(event: any) {
    // When overlay is open:
    // 1. show navigation
    // 2. Reset navigation to its default state (always show)
    if (!this.showOverlayService.preventScroll) {
      this.hideNav = false;
      this.navigationService.resetNav = false;
    }
  }

  mouseWheelDownFunc(event: any) {
    // When user scroll down and the overlay is open
    // prevent navigation to show/hide
    if (!this.showOverlayService.preventScroll) {
      this.hideNav = true;
      this.navigationService.resetNav = true;
    }
  }
}
