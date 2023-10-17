import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise104Component } from './exercise104.component';

describe('Exercise104Component', () => {
  let component: Exercise104Component;
  let fixture: ComponentFixture<Exercise104Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise104Component]
    });
    fixture = TestBed.createComponent(Exercise104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
