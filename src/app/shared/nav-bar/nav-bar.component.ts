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

    if (this.showOverlay) {
      // Overlay is showing
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  mouseWheelUpFunc() {
    this.hideNav = false;
  }

  mouseWheelDownFunc() {
    this.hideNav = true;
  }
}
