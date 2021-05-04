import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableClassComponent } from './editable-class.component';

describe('EditableClassComponent', () => {
  let component: EditableClassComponent;
  let fixture: ComponentFixture<EditableClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
