import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniEventComponent } from './alumni-event.component';

describe('AlumniEventComponent', () => {
  let component: AlumniEventComponent;
  let fixture: ComponentFixture<AlumniEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
