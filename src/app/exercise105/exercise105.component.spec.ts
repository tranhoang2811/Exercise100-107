import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise105Component } from './exercise105.component';

describe('Exercise105Component', () => {
  let component: Exercise105Component;
  let fixture: ComponentFixture<Exercise105Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise105Component]
    });
    fixture = TestBed.createComponent(Exercise105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
