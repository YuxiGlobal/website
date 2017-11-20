import { NavigationService } from './services/navigation.service';
import { ShowOverlayService } from './services/show-overlay.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'app/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { MenuComponent } from './menu/menu.component';
import { NavScrollingDirective } from './nav-scrolling.directive';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { ColorfulDotsComponent } from './colorful-dots/colorful-dots.component';
import { AboveTheFoldDirective } from './above-the-fold.directive';
import { ScrollTopDirective } from './scroll-top.directive';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { IsVisibleDirective } from './is-visible.directive';
import { CareersService } from 'app/shared/careers.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    HttpModule
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    ButtonComponent,
    BurgerMenuComponent,
    MenuComponent,
    NavScrollingDirective,
    GetInTouchComponent,
    ColorfulDotsComponent,
    AboveTheFoldDirective,
    ScrollTopDirective,
    CollapsibleComponent,
    IsVisibleDirective
  ],
  exports: [
    NavBarComponent,
    ButtonComponent,
    FooterComponent,
    GetInTouchComponent,
    NavScrollingDirective,
    ColorfulDotsComponent,
    CollapsibleComponent,
    IsVisibleDirective
  ],
  providers: [ShowOverlayService, NavigationService, CareersService]
})
export class SharedModule { }
