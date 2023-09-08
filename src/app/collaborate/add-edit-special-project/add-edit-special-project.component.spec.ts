import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSpecialProjectComponent } from './add-edit-special-project.component';

describe('AddEditSpecialProjectComponent', () => {
  let component: AddEditSpecialProjectComponent;
  let fixture: ComponentFixture<AddEditSpecialProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSpecialProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSpecialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
