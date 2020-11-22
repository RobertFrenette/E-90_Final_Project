import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  alertMsg: string = '';
  loginErr: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() { }

  doReset(): void {
    this.loginErr = false;
    this.alertMsg = '';
    this.email = '';
    this.password = '';
  }

  doLogin(): void {
    if (this.email == '' || this.password == '') {
      this.alertMsg = 'Error: Email Address and Password are required.';
      this.loginErr = true;
    } else {
      if (this.authService.login(this.email, this.password)) {
        this.doReset();
        this.router.navigate(['/contacts']);
      } else {
        this.alertMsg = 'Error: Login unsuccessful.';
        this.loginErr = true;
      }
    }
  }

  goRegister(): void {
    this.router.navigate(['/register']);
  }
}
