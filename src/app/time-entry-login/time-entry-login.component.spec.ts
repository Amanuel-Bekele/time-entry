import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryLoginComponent } from './time-entry-login.component';

describe('TimeEntryLoginComponent', () => {
  let component: TimeEntryLoginComponent;
  let fixture: ComponentFixture<TimeEntryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEntryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
