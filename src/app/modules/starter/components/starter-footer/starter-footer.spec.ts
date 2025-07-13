import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFooter } from './starter-footer';

describe('StarterFooter', () => {
  let component: StarterFooter;
  let fixture: ComponentFixture<StarterFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarterFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
