import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleHeader } from './console-header';

describe('ConsoleHeader', () => {
  let component: ConsoleHeader;
  let fixture: ComponentFixture<ConsoleHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsoleHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
