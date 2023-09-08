import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferExpertiseComponent } from './view-offer-expertise.component';

describe('ViewOfferExpertiseComponent', () => {
  let component: ViewOfferExpertiseComponent;
  let fixture: ComponentFixture<ViewOfferExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOfferExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
