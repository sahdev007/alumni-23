import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderChancellorComponent } from './founder-chancellor.component';

describe('FounderChancellorComponent', () => {
  let component: FounderChancellorComponent;
  let fixture: ComponentFixture<FounderChancellorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounderChancellorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderChancellorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
