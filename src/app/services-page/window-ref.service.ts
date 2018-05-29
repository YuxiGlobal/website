import { Injectable } from '@angular/core';

export interface ICustomWindow extends Window {
  dataLayer: any
}

function getWindow (): any {
  return window;
}

@Injectable()
export class WindowRefService {

  constructor() { }

  get nativeWindow (): ICustomWindow {
    return getWindow();
}

}
