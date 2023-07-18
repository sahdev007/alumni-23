import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMagazineComponent } from './add-edit-magazine.component';

describe('AddEditMagazineComponent', () => {
  let component: AddEditMagazineComponent;
  let fixture: ComponentFixture<AddEditMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMagazineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
