import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindAssignmentComponent } from './data-bind-assignment.component';

describe('DataBindAssignmentComponent', () => {
  let component: DataBindAssignmentComponent;
  let fixture: ComponentFixture<DataBindAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
