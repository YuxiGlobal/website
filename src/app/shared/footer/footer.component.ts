import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() switchOverlay = new EventEmitter();

  @Output() resetNavigation = new EventEmitter();

  openGetInTouch() {
    this.switchOverlay.emit();
  }

  setNavigationToFalse() {
    this.resetNavigation.emit();
  }

  ngOnInit() {
  }

}
