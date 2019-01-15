import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {filter, first, map, take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit, OnDestroy {

  myValue = 0;
  myValue2 = 0;


  myResultValue = 0;
  sub: Subscription;


  constructor(private service: AuthService) {
  }

  ngOnInit() {

    // this.service.getUserAuth().subscribe((u) => {
    //   console.log('Calc Sub', u);
    // });

    this.sub = this.service.getUserAuth().pipe(
      filter(u => u.userName !== 'foo'),
      // first(), <-- takes the first emitted value
      take(2), // <- takes the first two emitted value
      map(user => {
        console.log('Calc sub', user);
      })
    ).subscribe();
  }

  onAdd($result: number) {
    console.log('onAdd ', $result);
    this.myResultValue = $result;

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
