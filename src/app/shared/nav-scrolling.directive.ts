import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavScrolling]'
})
export class NavScrollingDirective {
  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();

  // Need this for mobile
  // https://stackoverflow.com/questions/13278087/determine-vertical-direction-of-a-touchmove
  lastY = 0;
  lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onScrollAllBrowsersButSafari(event: any) {
    this.scrollInAllBrowsersExceptSafari(event);
  }

  @HostListener('window:wheel', ['$event'])
  onScrollSafari(event: any) {
    // Made this because of /home in Safari
    this.scrollInSafari(event);
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchScroll(event: any) {
    this.handleTouchMove(event);
  }

  handleTouchMove(evento: any) {
    // https://stackoverflow.com/questions/13278087/determine-vertical-direction-of-a-touchmove
    const currentY = evento.touches[0].clientY;

     if (currentY > this.lastY) {
         this.mouseWheelUp.emit(event);
     } else if (currentY < this.lastY) {
         this.mouseWheelDown.emit(event);
     }

     this.lastY = currentY;
  }

  scrollInAllBrowsersExceptSafari(event: any) {
    const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;
    const isNotScrollingAboveLimits = window.pageYOffset > 0;

    if (scrollTopPosition > this.lastScrollTop && isNotScrollingAboveLimits) {
      // Scrolling up
      this.mouseWheelDown.emit(event);
    } else {
      // Scrolling down
      this.mouseWheelUp.emit(event);
    }

    this.lastScrollTop = scrollTopPosition;
  }

  scrollInSafari(scrollEvent: any) {
    const event = window.event || scrollEvent; // old IE support
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

    if (delta > 0) {
      // Scrolling up
      this.mouseWheelUp.emit(event);
    } else if (delta < 0) {
      // Scrolling down
      this.mouseWheelDown.emit(event);
    }
  }

}
