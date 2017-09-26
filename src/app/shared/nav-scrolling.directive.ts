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

  @HostListener('window:mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('window:DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('window:onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('window:touchmove', ['$event']) onTouchScroll(event: any) {
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

  mouseWheelFunc(scrollEvent: any) {
    const event = window.event || scrollEvent; // old IE support
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

    if (delta > 0) {
      // Scrolling up
      this.mouseWheelUp.emit(event);
    } else if (delta < 0) {
      // Scrolling down
      this.mouseWheelDown.emit(event);
    }

    // // // for IE
    // event.returnValue = false;

    // // for Chrome and Firefox
    // if (event.preventDefault) {
    //     event.preventDefault();
    // }
  }

}
