import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise107Component } from './exercise107.component';

describe('Exercise107Component', () => {
  let component: Exercise107Component;
  let fixture: ComponentFixture<Exercise107Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise107Component]
    });
    fixture = TestBed.createComponent(Exercise107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
