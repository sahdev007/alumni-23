import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsCategoryComponent } from './donations-category.component';

describe('DonationsCategoryComponent', () => {
  let component: DonationsCategoryComponent;
  let fixture: ComponentFixture<DonationsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
