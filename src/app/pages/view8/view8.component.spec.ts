import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View8Component } from './view8.component';

describe('View8Component', () => {
  let component: View8Component;
  let fixture: ComponentFixture<View8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [View8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
