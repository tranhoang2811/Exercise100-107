import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise101Component } from './exercise101.component';

describe('Exercise101Component', () => {
  let component: Exercise101Component;
  let fixture: ComponentFixture<Exercise101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise101Component]
    });
    fixture = TestBed.createComponent(Exercise101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
