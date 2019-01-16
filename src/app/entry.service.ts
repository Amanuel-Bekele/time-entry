import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable()
export class EntryService {

  readonly api = environment.loginUri;
  private timeEntries: BehaviorSubject<TimeEntry[]>;
  private readonly timeEntries$: Observable<TimeEntry[]>;

  constructor(private http: HttpClient) {
    this.timeEntries = new BehaviorSubject<TimeEntry[]>([]);
    this.timeEntries$ = this.timeEntries.asObservable();
  }

  loadTimeEntries(userName: string): void {
    this.http.get<TimeEntry[]>(
      `${this.api}/getTimeEntry?userName=${userName}`
    ).toPromise()
      .then((listOfTimeEntries) => {
        this.timeEntries.next(listOfTimeEntries);
      })
      .catch((e) => {
        console.error('LoadTimeEntries ERROR: ', e);
      });
  }

  getTimeEntries(): Observable<TimeEntry[]> {
    return this.timeEntries$;
  }
}


export interface TimeEntry {
  userName: string;
  dateOfTime: string;
  hours: number;
  timeEntryId: string;
}
