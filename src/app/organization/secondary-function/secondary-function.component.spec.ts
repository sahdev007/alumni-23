import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFunctionComponent } from './secondary-function.component';

describe('SecondaryFunctionComponent', () => {
  let component: SecondaryFunctionComponent;
  let fixture: ComponentFixture<SecondaryFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
