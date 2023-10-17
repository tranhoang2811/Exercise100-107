import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise103Component } from './exercise103.component';

describe('Exercise103Component', () => {
  let component: Exercise103Component;
  let fixture: ComponentFixture<Exercise103Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise103Component]
    });
    fixture = TestBed.createComponent(Exercise103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
