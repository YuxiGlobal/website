import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDesktopComponent } from './forms-desktop.component';

describe('FormsDesktopComponent', () => {
  let component: FormsDesktopComponent;
  let fixture: ComponentFixture<FormsDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
