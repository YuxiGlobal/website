import { Injectable } from '@angular/core';

@Injectable()
export class ShowOverlayService {
    private _preventScroll = false;

    get preventScroll() {
        return this._preventScroll;
    }
    set preventScroll(preventScroll: boolean) {
        this._preventScroll = preventScroll;
    }
}
