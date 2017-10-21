import { NavigationService } from './shared/services/navigation.service';
import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private navigationService: NavigationService ) {}

  onActivate(event) {
    this.navigationService.resetNav = false;
    console.log('changing...');
  }
}
