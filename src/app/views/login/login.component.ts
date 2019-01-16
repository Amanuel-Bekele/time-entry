import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  userObj: User;
  sub: Subscription;
  user$: Observable<User>;

  constructor(private service: AuthService) {
  }

  ngOnInit() {

    this.user$ = this.service.getUserAuth();

    this.sub = this.user$.subscribe((userData) => {
      console.log('Login subscribe', userData);
      this.userObj = userData;
    });
  }


  onLoginSubmit() {
    console.log('Submit', this.userObj);
    this.service.login(this.userObj);

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

export interface User {
  userName: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  isSuccess: boolean;
  isFailure: boolean;
}
