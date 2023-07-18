import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShareOpportunityComponent } from './view-share-opportunity.component';

describe('ViewShareOpportunityComponent', () => {
  let component: ViewShareOpportunityComponent;
  let fixture: ComponentFixture<ViewShareOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShareOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShareOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
