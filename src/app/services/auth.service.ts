import {Injectable} from '@angular/core';
import {User} from '../views/login/login.component';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class AuthService {

  private userAuth: BehaviorSubject<User>;
  private readonly userAuth$: Observable<User>;

  constructor() {
    this.userAuth = new BehaviorSubject<User>({userName: 'userInit'});
    this.userAuth$ = this.userAuth.asObservable();

  }

  public login(user: User): void {
    console.log('Service Login', user);
    this.userAuth.next(user);
  }

  public getUserAuth(): Observable<User> {
    return this.userAuth$;

  }
}
