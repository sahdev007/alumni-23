import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersAndJobsComponent } from './careers-and-jobs.component';

describe('CareersAndJobsComponent', () => {
  let component: CareersAndJobsComponent;
  let fixture: ComponentFixture<CareersAndJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersAndJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersAndJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
