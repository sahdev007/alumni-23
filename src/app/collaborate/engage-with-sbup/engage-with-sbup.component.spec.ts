import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageWithSbupComponent } from './engage-with-sbup.component';

describe('EngageWithSbupComponent', () => {
  let component: EngageWithSbupComponent;
  let fixture: ComponentFixture<EngageWithSbupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngageWithSbupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageWithSbupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
