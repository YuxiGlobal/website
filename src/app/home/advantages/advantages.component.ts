import { IAdvantagesInfo } from './../../shared/iadvantages-info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
  @Input() info: IAdvantagesInfo;
}
