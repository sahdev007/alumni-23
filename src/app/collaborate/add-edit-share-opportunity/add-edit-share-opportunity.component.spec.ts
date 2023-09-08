import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditShareOpportunityComponent } from './add-edit-share-opportunity.component';

describe('AddEditShareOpportunityComponent', () => {
  let component: AddEditShareOpportunityComponent;
  let fixture: ComponentFixture<AddEditShareOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditShareOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditShareOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
