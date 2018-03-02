import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialBannerComponent } from './testimonial-banner.component';

describe('TestimonialBannerComponent', () => {
  let component: TestimonialBannerComponent;
  let fixture: ComponentFixture<TestimonialBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
