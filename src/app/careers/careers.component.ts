import { Component, OnInit } from '@angular/core';
import { OUR_CULTURE_INFO} from 'app/shared/website-info';
import { IOurCultureInfo } from './../shared/iour-culture-info';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  cultureInfo: IOurCultureInfo[];
  constructor() {
    this.cultureInfo = OUR_CULTURE_INFO;
  }

  ngOnInit() {
  }

}
