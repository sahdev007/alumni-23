import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbupComponent } from './sbup.component';

describe('SbupComponent', () => {
  let component: SbupComponent;
  let fixture: ComponentFixture<SbupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
