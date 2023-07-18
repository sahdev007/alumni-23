import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClubTypeComponent } from './view-club-type.component';

describe('ViewClubTypeComponent', () => {
  let component: ViewClubTypeComponent;
  let fixture: ComponentFixture<ViewClubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClubTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
