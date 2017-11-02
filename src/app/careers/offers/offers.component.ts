import { IOffersInfo } from './../../shared/ioffers-info';
import { OFFER_INFO } from './../../shared/website-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offerInfo: IOffersInfo[];
  constructor() { 
    this.offerInfo = OFFER_INFO;
  }

  isFirst(position: number): boolean{
    return position === 0 ;
  }
  isLast(position: number): boolean{
    return position === this.offerInfo.length -1;
  }

  ngOnInit() {
  }

}
