import { IAdvantagesInfo } from 'app/shared/iadvantages-info';
import { BANNERS_INFO, SERVICES_INFO, ADVANTAGES_INFO } from './../shared/website-info';
import { MnFullpageOptions } from 'ngx-fullpage';
import { Component, OnInit } from '@angular/core';
import { IBannerInfo } from 'app/shared/ibanner-info';
import { IServiceInfo } from 'app/shared/iservices-info';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannersInfo: IBannerInfo[];
  servicesInfo: IServiceInfo[];
  advantagesInfo: IAdvantagesInfo[];

  constructor() {
    this.bannersInfo = BANNERS_INFO;
    this.servicesInfo = SERVICES_INFO;
    this.advantagesInfo = ADVANTAGES_INFO;
  }

  ngOnInit() {
  }
}
