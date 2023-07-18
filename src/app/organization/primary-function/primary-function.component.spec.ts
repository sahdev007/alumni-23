import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryFunctionComponent } from './primary-function.component';

describe('PrimaryFunctionComponent', () => {
  let component: PrimaryFunctionComponent;
  let fixture: ComponentFixture<PrimaryFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
