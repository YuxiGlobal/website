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

  hideNav: boolean = false;
  showOverlay = false;

  constructor(private showOverlayService: ShowOverlayService, private navigationService: NavigationService,
    private router: Router) { 
    router.events.subscribe(()=>{
      this.hideNav = this.navigationService.resetNav;
    })
   }

  handleMenuClick() {
    this.showOverlay = !this.showOverlay;
    this.showOverlayService.preventScroll = !this.showOverlayService.preventScroll;
    this.hideNav = this.navigationService.resetNav = false;
  }

  mouseWheelUpFunc(event: any) {
    if (!this.showOverlayService.preventScroll) {
      this.hideNav = this.navigationService.resetNav = false;
    }
  }

  mouseWheelDownFunc(event: any) {
    if (!this.showOverlayService.preventScroll) {
      this.hideNav =  this.navigationService.resetNav = true;
    }
  }
}
