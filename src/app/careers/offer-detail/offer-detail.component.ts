import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CareersService } from 'app/shared/careers.service'
import { IOffersInfo } from 'app/shared/ioffers-info';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  offerInfo: IOffersInfo;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private careersService: CareersService
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((data: IOffersInfo) => this.careersService.getCareer(data.id))
    .subscribe((data: any) => {
      this.offerInfo = data.fields;
    });
  }

}
