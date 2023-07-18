import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryClubComponent } from './industry-club.component';

describe('IndustryClubComponent', () => {
  let component: IndustryClubComponent;
  let fixture: ComponentFixture<IndustryClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
