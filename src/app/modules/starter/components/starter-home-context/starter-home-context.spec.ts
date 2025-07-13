import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterHomeContext } from './starter-home-context';

describe('StarterHomeContext', () => {
  let component: StarterHomeContext;
  let fixture: ComponentFixture<StarterHomeContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarterHomeContext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterHomeContext);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
