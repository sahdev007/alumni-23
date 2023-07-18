import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniJobsComponent } from './alumni-jobs.component';

describe('AlumniJobsComponent', () => {
  let component: AlumniJobsComponent;
  let fixture: ComponentFixture<AlumniJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
