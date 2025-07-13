import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMainServices } from './starter-main-services';

describe('StarterMainServices', () => {
  let component: StarterMainServices;
  let fixture: ComponentFixture<StarterMainServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarterMainServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterMainServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
