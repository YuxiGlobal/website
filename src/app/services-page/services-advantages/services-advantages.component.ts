import { Component, OnInit, Input } from '@angular/core';
import { IAdvantagesCompleteInfo } from 'app/shared/iadvantages-complete-info';
import { ADVANTAGES_COMPLETE_INFO } from 'app/shared/website-info';

@Component({
  selector: 'app-services-advantages',
  templateUrl: './services-advantages.component.html',
  styleUrls: ['./services-advantages.component.scss']
})
export class ServicesAdvantagesComponent implements OnInit {
  advantagesCompleteInfo: IAdvantagesCompleteInfo[];

  @Input() info: IAdvantagesCompleteInfo;
  
  constructor() {
    this.advantagesCompleteInfo = ADVANTAGES_COMPLETE_INFO;
   }

  ngOnInit() {
  }

}
