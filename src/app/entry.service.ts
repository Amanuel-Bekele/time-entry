import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class EntryService {

  private timeEntries: BehaviorSubject<TimeEntry[]>;
  private readonly timeEntries$: Observable<TimeEntry>;

  constructor(private http: HttpClient) {
    this.timeEntries = new BehaviorSubject<TimeEntry[]>([])


  }

  loadTimeEntries(userName: string): void{


  }


}


export interface TimeEntry {
  userName: string;
  dateOfTime: string;
  hours: number;
  timeEntryId: string;
}
