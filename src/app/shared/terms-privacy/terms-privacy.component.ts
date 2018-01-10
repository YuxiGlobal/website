import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'app/shared/services/navigation.service';
import { ShowOverlayService } from 'app/shared/services/show-overlay.service';

@Component({
  selector: 'app-terms-privacy',
  templateUrl: './terms-privacy.component.html',
  styleUrls: ['./terms-privacy.component.scss']
})
export class TermsPrivacyComponent implements OnInit {
  showOverlay = false;
  constructor(
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  openOverlay() {
    this.showOverlay = !this.showOverlay;
    this.showOverlayService.preventScroll = !this.showOverlayService.preventScroll;
  }

  closeOverlay() {
    this.showOverlay = false;
    this.showOverlayService.preventScroll = false;
  }
}
