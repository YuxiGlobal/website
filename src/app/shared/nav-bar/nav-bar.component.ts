import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  showOverlay = false;

  constructor() { }

  ngOnInit() {
  }

  handleMenuClick() {
    this.showOverlay = !this.showOverlay;

    if (this.showOverlay) {
      // Overlay is showing
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

}
