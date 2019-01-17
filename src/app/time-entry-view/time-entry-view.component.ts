import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {EntryService, TimeEntry} from '../entry.service';
import {filter, map, switchMap} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-time-entry-view',
  templateUrl: './time-entry-view.component.html',
  styleUrls: ['./time-entry-view.component.css']
})
export class TimeEntryViewComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private anotherSub: Subscription;
  private timeEntries: TimeEntry[];

  constructor(private service: EntryService, private anotherService: AuthService) {
  }

  ngOnInit() {
    // this.sub = this.service.getTimeEntries().pipe(
    //   map(entries => {
    //     this.timeEntries = entries;
    //   })
    // ).subscribe();
    //
    // this.anotherSub = this.anotherService.getUserAuth().pipe(
    //   // filter(user => user.userName && user.userName.length > 0),
    //   map(user => {
    //     console.log(user);
    //     this.service.loadTimeEntries(user.userName);
    //   })
    // ).subscribe();

    this.sub = this.anotherService.getUserAuth().pipe(
      filter(user => user.userName && user.userName.length > 0),
      switchMap(
        userVar => {
          this.service.loadTimeEntries(userVar.userName);
          return this.service.getTimeEntries().pipe(
            map(entries => {
              console.log('MAP ', entries);
              this.timeEntries = entries;
            })
          );
        })).subscribe();


  }

  ngOnDestroy(): void {

    this.sub.unsubscribe();
  }

}
