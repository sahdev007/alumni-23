import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShareOpportunitiesComponent } from './edit-share-opportunities.component';

describe('EditShareOpportunitiesComponent', () => {
  let component: EditShareOpportunitiesComponent;
  let fixture: ComponentFixture<EditShareOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShareOpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShareOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
