import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryItemComponent } from './time-entry-item.component';

describe('TimeEntryItemComponent', () => {
  let component: TimeEntryItemComponent;
  let fixture: ComponentFixture<TimeEntryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEntryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
