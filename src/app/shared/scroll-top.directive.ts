import { Directive } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {

  constructor(
    private router: Router
  ) {
    router.events.subscribe(() => {
      window.scroll({
        top: 0
      });
    });
  }
}
