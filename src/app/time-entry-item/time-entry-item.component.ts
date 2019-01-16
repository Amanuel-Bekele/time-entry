import {Component, Input, OnInit} from '@angular/core';
import {TimeEntry} from '../entry.service';

@Component({
  selector: 'app-time-entry-item',
  templateUrl: './time-entry-item.component.html',
  styleUrls: ['./time-entry-item.component.css']
})
export class TimeEntryItemComponent implements OnInit {

  @Input() aSingleTimeEntry: TimeEntry;


  constructor() { }

  ngOnInit() {
  }

}
