import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-forms-desktop',
  templateUrl: './forms-desktop.component.html',
  styleUrls: ['./forms-desktop.component.scss']
})
export class FormsDesktopComponent {

  selectedIndex = 0;
  params;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.activeTabFromUrl(params.formType)
    });
  }

  activeTabFromUrl(urlFragment) {
    if (urlFragment === 'business') {
      this.selectedIndex = 0;
    } else if (urlFragment === 'general') {
      this.selectedIndex = 1;
    }
  }

  tabChanged(event) {
    this.selectedIndex = event.index;
  }

}
