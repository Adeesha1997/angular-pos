import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterHeader } from './starter-header';

describe('StarterHeader', () => {
  let component: StarterHeader;
  let fixture: ComponentFixture<StarterHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarterHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
