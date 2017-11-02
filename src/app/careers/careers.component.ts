import { Component, OnInit } from '@angular/core';
import { OUR_CULTURE_INFO} from 'app/shared/website-info';
import { IOurCultureInfo } from './../shared/iour-culture-info';
import { ShowOverlayService } from 'app/shared/services/show-overlay.service';
import { NavigationService } from 'app/shared/services/navigation.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  cultureInfo: IOurCultureInfo[];
  showOverlay = false;
  constructor(
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService
  ) {
    this.cultureInfo = OUR_CULTURE_INFO;
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
