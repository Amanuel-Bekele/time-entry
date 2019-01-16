import {Injectable} from '@angular/core';
import {User} from '../views/login/login.component';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  readonly api = environment.loginUri;

  private userAuth: BehaviorSubject<User>;
  private readonly userAuth$: Observable<User>;

  constructor(private http: HttpClient) {
    const init = JSON.parse(localStorage.getItem('user-stuff')) || {userName: '', isSuccess: false, isFailure: false};
    console.log('Auth init', init);
    this.userAuth = new BehaviorSubject<User>(init);
    this.userAuth$ = this.userAuth.asObservable();

  }

  public login(user: User): void {
    this.http.get<User>(`${this.api}?userName=${user.userName}&password=${user.password}`).toPromise()
      .then(
        userMessage => {
          const u = {...userMessage, isSuccess: true, isFailure: false};
          localStorage.setItem('user-stuff', JSON.stringify(u));
          this.userAuth.next(u);
        })
      .catch(() => {
        this.userAuth.next({userName: '', password: '', isFailure: true, isSuccess: false});
      });
  }

  public getUserAuth(): Observable<User> {
    return this.userAuth$;

  }
}
