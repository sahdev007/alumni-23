import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventTypeComponent } from './add-edit-event-type.component';

describe('AddEditEventTypeComponent', () => {
  let component: AddEditEventTypeComponent;
  let fixture: ComponentFixture<AddEditEventTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEventTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEventTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
