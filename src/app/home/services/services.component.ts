import { IServiceInfo } from 'app/shared/iservices-info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @Input() info: IServiceInfo;  

  isActive = true;

  mouseEnter() {
    this.isActive = false;
  }
  mouseLeave() {
    this.isActive = true;
  }
}
