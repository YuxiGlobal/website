import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulDotsComponent } from './colorful-dots.component';

describe('ColorfulDotsComponent', () => {
  let component: ColorfulDotsComponent;
  let fixture: ComponentFixture<ColorfulDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfulDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfulDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
