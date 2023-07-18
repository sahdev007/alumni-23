import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParticipateAdmissionComponent } from './add-edit-participate-admission.component';

describe('AddEditParticipateAdmissionComponent', () => {
  let component: AddEditParticipateAdmissionComponent;
  let fixture: ComponentFixture<AddEditParticipateAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditParticipateAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditParticipateAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
