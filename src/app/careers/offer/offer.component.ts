import { IOffersInfo } from 'app/shared/ioffers-info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() info: IOffersInfo;
  constructor() { }

  ngOnInit() {
  }

}
