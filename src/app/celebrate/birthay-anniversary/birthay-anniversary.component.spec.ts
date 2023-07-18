import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthayAnniversaryComponent } from './birthay-anniversary.component';

describe('BirthayAnniversaryComponent', () => {
  let component: BirthayAnniversaryComponent;
  let fixture: ComponentFixture<BirthayAnniversaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthayAnniversaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthayAnniversaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
