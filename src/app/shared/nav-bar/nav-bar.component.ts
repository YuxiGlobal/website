import { NavigationService } from './../services/navigation.service';
import { ShowOverlayService } from './../services/show-overlay.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HotStuffService } from 'app/shared/hot-stuff.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  hotStuffItems = null;
  hideNav = false;
  showOverlay = false;
  showHotStuff = false;

  constructor(
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService,
    private router: Router,
    private hotStuffService: HotStuffService
  ) {
    router.events.subscribe(() => {
      this.showOverlay = this.navigationService.resetNav;
      this.hideNav = this.navigationService.resetNav;
      // This was made to reset the 'preventScroll' service to its default after a route change.
      // This fixes the bug where the nav was sticky after navigating from the burger overlay
      this.showOverlayService.preventScroll = false;
    });

    this.hotStuffService
      .getHotStuffItems()
      .subscribe((items) => {
        this.hotStuffItems = items;
      });
   }

  handleMenuClick() {
    this.showOverlay = !this.showOverlay;
    this.showOverlayService.preventScroll = !this.showOverlayService.preventScroll;
    this.hideNav = false;
    this.navigationService.resetNav = false;
    this.hideHotStuff();
  }

  mouseWheelUpFunc(event: any) {
    // Hide hot stuff when scrolling
    this.hideHotStuff();
    // When overlay is open:
    // 1. show navigation
    // 2. Reset navigation to its default state (always show)
    if (!this.showOverlayService.preventScroll) {
      this.hideNav = false;
      this.navigationService.resetNav = false;
    }
  }

  mouseWheelDownFunc(event: any) {
    // Hide hot stuff when scrolling
    this.hideHotStuff();
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

  hideHotStuff() {
    this.showHotStuff = false;
  }
}
