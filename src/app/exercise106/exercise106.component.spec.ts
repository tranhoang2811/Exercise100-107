import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise106Component } from './exercise106.component';

describe('Exercise106Component', () => {
  let component: Exercise106Component;
  let fixture: ComponentFixture<Exercise106Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise106Component]
    });
    fixture = TestBed.createComponent(Exercise106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
