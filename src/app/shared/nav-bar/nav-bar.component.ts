import { NavigationService } from './../services/navigation.service';
import { ShowOverlayService } from './../services/show-overlay.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

const hot_stuff_info = [
  {
    id: 1,
    title: 'staff augmentation',
    url: 'http://yuxiglobal.com/'
  },
  {
    id: 2,
    title: 'specialized projects',
    url: 'http://yuxiglobal.com/'
  }
]

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  hideNav = false;
  showOverlay = false;
  showHotStuff = false;



  constructor(
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.showOverlay = this.navigationService.resetNav;
      this.hideNav = this.navigationService.resetNav;
      // This was made to reset the 'preventScroll' service to its default after a route change.
      // This fixes the bug where the nav was sticky after navigating from the burger overlay
      this.showOverlayService.preventScroll = false;
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

  openHotStuff() {
    this.showHotStuff = !this.showHotStuff;
  }
}
