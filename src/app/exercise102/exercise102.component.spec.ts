import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise102Component } from './exercise102.component';

describe('Exercise102Component', () => {
  let component: Exercise102Component;
  let fixture: ComponentFixture<Exercise102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise102Component]
    });
    fixture = TestBed.createComponent(Exercise102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
