import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBatchesComponent } from './add-edit-batches.component';

describe('AddEditBatchesComponent', () => {
  let component: AddEditBatchesComponent;
  let fixture: ComponentFixture<AddEditBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
