import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAdmissionPanelComponent } from './add-edit-admission-panel.component';

describe('AddEditAdmissionPanelComponent', () => {
  let component: AddEditAdmissionPanelComponent;
  let fixture: ComponentFixture<AddEditAdmissionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAdmissionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAdmissionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
