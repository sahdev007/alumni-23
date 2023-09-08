import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShareOpportunitiesComponent } from './view-share-opportunities.component';

describe('ViewShareOpportunitiesComponent', () => {
  let component: ViewShareOpportunitiesComponent;
  let fixture: ComponentFixture<ViewShareOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShareOpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShareOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
