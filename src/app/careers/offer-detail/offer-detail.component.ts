import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CareersService } from 'app/shared/careers.service'
import { IOffersInfo } from 'app/shared/ioffers-info';
import { NavigationService } from 'app/shared/services/navigation.service';
import { ShowOverlayService } from 'app/shared/services/show-overlay.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  offerInfo: IOffersInfo;
  showOverlay = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private careersService: CareersService,
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((data: IOffersInfo) => this.careersService.getCareer(data.id))
    .subscribe((data: any) => {
      this.offerInfo = data.fields;
    });
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
