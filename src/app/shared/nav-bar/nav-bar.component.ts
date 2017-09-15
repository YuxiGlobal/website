import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  showOverlay: boolean = false;
  hideNav: boolean = false;

  handleMenuClick() {
    this.showOverlay = !this.showOverlay;
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
