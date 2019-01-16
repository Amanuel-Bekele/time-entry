import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryViewComponent } from './time-entry-view.component';

describe('TimeEntryViewComponent', () => {
  let component: TimeEntryViewComponent;
  let fixture: ComponentFixture<TimeEntryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEntryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
