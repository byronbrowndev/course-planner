import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableEventComponent } from './notable-event.component';

describe('NotableEventComponent', () => {
  let component: NotableEventComponent;
  let fixture: ComponentFixture<NotableEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotableEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
