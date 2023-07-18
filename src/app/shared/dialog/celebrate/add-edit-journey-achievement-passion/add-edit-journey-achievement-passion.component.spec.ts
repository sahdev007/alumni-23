import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditJourneyAchievementPassionComponent } from './add-edit-journey-achievement-passion.component';

describe('AddEditJourneyAchievementPassionComponent', () => {
  let component: AddEditJourneyAchievementPassionComponent;
  let fixture: ComponentFixture<AddEditJourneyAchievementPassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditJourneyAchievementPassionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditJourneyAchievementPassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
