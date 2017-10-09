import { Observable } from 'rxjs/Observable';
import { Directive, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromEvent';

@Directive({
  selector: '[appAboveTheFold]'
})
export class AboveTheFoldDirective implements AfterViewInit {
  aboveTheFoldClass = 'pass-the-fold';

  constructor(
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.getIsAboveTheFold();
    }, 0);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    Observable
      .fromEvent(window, 'scroll') // Listen for scroll
      .throttleTime(250) // Wait 250ms to pass to the next action
      .take(1) // Take only one event
      .subscribe(this.getIsAboveTheFold) // Execute the function after 250ms one time
  }

  getIsAboveTheFold = () => {
    // Is scroll above browser height?
    window.pageYOffset >= window.innerHeight ?
      this.el.nativeElement.classList.add(this.aboveTheFoldClass) : this.el.nativeElement.classList.remove(this.aboveTheFoldClass);
  }

}
