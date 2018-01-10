import { Directive, ElementRef, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromEvent';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  isVisible = false;
  metroCableElements: any;

  constructor(
    private el: ElementRef
  ) {
    setTimeout(() => {
      this.getIsVisible();
    }, 0);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    Observable
      .fromEvent(window, 'scroll') // Listen for scroll
      .throttleTime(250) // Wait 250ms to pass to the next action
      .take(1) // Take only one event
      .subscribe(() => this.getIsVisible()); // Execute the function after 250ms one time
  }

  getIsVisible() {
    if (this.isVisible) {
      // Animate once
      return;
    }

    const elemTop = this.el.nativeElement.getBoundingClientRect().top;
    const elemBottom = this.el.nativeElement.getBoundingClientRect().bottom;

    // https://stackoverflow.com/a/22480938/1405803
    // Only completely visible elements return true:
    this.isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    // this.isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    /**
     * Only execute this once.
     */
    if (this.isVisible) {
      this.el.nativeElement.classList.add('visible');
      this.animateMetroCable();
    }
  }

  animateMetroCable() {
    // Get DOM elements - SVG Elements for each metro cable
    const metroCableElements = document.querySelectorAll('.metro-cable-element');

    Array
      // make metroCableElements a REAL array
      .from(metroCableElements)
      // animate each metroCableElement. .beginElement() is an SVG method
      .forEach((metroCableElement: any) => metroCableElement.beginElement());
  }
}
