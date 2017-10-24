import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMobileComponent } from './forms-mobile.component';

describe('FormsMobileComponent', () => {
  let component: FormsMobileComponent;
  let fixture: ComponentFixture<FormsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
