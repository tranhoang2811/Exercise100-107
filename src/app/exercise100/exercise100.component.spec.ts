import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise100Component } from './exercise100.component';

describe('Exercise100Component', () => {
  let component: Exercise100Component;
  let fixture: ComponentFixture<Exercise100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise100Component]
    });
    fixture = TestBed.createComponent(Exercise100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
