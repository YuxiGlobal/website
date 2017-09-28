import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
    private _resetNav = false;

    get resetNav() {
        return this._resetNav;
    }
    set resetNav(resetNav: boolean) {
        this._resetNav = resetNav;
    }
}  