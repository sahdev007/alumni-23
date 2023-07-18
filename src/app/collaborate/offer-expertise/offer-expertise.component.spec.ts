import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferExpertiseComponent } from './offer-expertise.component';

describe('OfferExpertiseComponent', () => {
  let component: OfferExpertiseComponent;
  let fixture: ComponentFixture<OfferExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
