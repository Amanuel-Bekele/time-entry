import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userObj: User = {userName: ''};

  constructor() { }

  ngOnInit() {
  }


  onLoginSubmit(){
    console.log("Submit", this.userObj)

  }

}

export interface User {
  userName: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}
