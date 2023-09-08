import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKeyContactComponent } from './view-key-contact.component';

describe('ViewKeyContactComponent', () => {
  let component: ViewKeyContactComponent;
  let fixture: ComponentFixture<ViewKeyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewKeyContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKeyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
