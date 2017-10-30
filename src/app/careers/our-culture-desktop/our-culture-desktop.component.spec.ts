import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCultureDesktopComponent } from './our-culture-desktop.component';

describe('OurCultureDesktopComponent', () => {
  let component: OurCultureDesktopComponent;
  let fixture: ComponentFixture<OurCultureDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCultureDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCultureDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
