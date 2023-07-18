import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareOpportunitiesComponent } from './share-opportunities.component';

describe('ShareOpportunitiesComponent', () => {
  let component: ShareOpportunitiesComponent;
  let fixture: ComponentFixture<ShareOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareOpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
