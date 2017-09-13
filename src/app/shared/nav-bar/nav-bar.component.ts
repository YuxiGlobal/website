import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  showOverlay = false;
  hideNav = false;

  constructor() { }

  handleMenuClick() {
    this.showOverlay = !this.showOverlay;
    // this.hideNav = true;
  }

  mouseWheelUpFunc() {
    if (!this.showOverlay) {
      this.hideNav = false;
    }
  }

  mouseWheelDownFunc() {
    if (!this.showOverlay) {
      this.hideNav = true;
    }
  }
}
