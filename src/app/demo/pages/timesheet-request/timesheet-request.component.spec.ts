import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetRequestComponent } from './timesheet-request.component';

describe('TimesheetRequestComponent', () => {
  let component: TimesheetRequestComponent;
  let fixture: ComponentFixture<TimesheetRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
