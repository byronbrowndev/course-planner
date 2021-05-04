import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaDisplayComponent } from './gpa-display.component';

describe('GpaDisplayComponent', () => {
  let component: GpaDisplayComponent;
  let fixture: ComponentFixture<GpaDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpaDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
