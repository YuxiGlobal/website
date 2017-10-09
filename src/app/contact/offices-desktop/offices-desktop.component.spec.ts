import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesDesktopComponent } from './offices-desktop.component';

describe('OfficesDesktopComponent', () => {
  let component: OfficesDesktopComponent;
  let fixture: ComponentFixture<OfficesDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficesDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
