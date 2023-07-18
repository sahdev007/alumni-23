import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderGraduateComponent } from './under-graduate.component';

describe('UnderGraduateComponent', () => {
  let component: UnderGraduateComponent;
  let fixture: ComponentFixture<UnderGraduateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderGraduateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderGraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
