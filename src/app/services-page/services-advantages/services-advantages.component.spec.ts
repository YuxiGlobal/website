import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdvantagesComponent } from './services-advantages.component';

describe('ServicesAdvantagesComponent', () => {
  let component: ServicesAdvantagesComponent;
  let fixture: ComponentFixture<ServicesAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
