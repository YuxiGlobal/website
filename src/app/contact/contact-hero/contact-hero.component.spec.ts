import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeroComponent } from './contact-hero.component';

describe('ContactHeroComponent', () => {
  let component: ContactHeroComponent;
  let fixture: ComponentFixture<ContactHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
