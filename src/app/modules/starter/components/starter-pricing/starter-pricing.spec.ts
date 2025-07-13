import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterPricing } from './starter-pricing';

describe('StarterPricing', () => {
  let component: StarterPricing;
  let fixture: ComponentFixture<StarterPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarterPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterPricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
