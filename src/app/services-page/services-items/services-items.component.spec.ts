import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesItemsComponent } from './services-items.component';

describe('ServicesItemsComponent', () => {
  let component: ServicesItemsComponent;
  let fixture: ComponentFixture<ServicesItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
