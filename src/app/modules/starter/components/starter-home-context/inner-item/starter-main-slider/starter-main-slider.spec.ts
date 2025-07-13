import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMainSlider } from './starter-main-slider';

describe('StarterMainSlider', () => {
  let component: StarterMainSlider;
  let fixture: ComponentFixture<StarterMainSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarterMainSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterMainSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
