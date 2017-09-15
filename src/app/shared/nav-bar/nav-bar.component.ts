import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  showOverlay: boolean = false;
  hideNav: boolean = false;
  navbarCssClasses: {} = { 'hide': this.hideNav, 'menu-visible': this.showOverlay }


  handleMenuClick() {
    this.showOverlay = !this.showOverlay;
    // this.hideNav = true;
  }

  mouseWheelUpFunc(event: any) {
    if (!this.showOverlay) {
      this.hideNav = false;
    }
  }

  mouseWheelDownFunc(event: any) {
    if (!this.showOverlay) {
      this.hideNav = true;
    }
  }
}
