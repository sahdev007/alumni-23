import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyContactComponent } from './key-contact.component';

describe('KeyContactComponent', () => {
  let component: KeyContactComponent;
  let fixture: ComponentFixture<KeyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
