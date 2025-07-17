import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleFooter } from './console-footer';

describe('ConsoleFooter', () => {
  let component: ConsoleFooter;
  let fixture: ComponentFixture<ConsoleFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsoleFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
