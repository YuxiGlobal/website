import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesMobileComponent } from './offices-mobile.component';

describe('OfficesMobileComponent', () => {
  let component: OfficesMobileComponent;
  let fixture: ComponentFixture<OfficesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
