import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalClubComponent } from './professional-club.component';

describe('ProfessionalClubComponent', () => {
  let component: ProfessionalClubComponent;
  let fixture: ComponentFixture<ProfessionalClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
