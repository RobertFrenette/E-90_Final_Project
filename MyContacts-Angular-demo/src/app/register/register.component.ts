import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirm: string = '';
  alertMsg: string = '';
  registrationErr: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() { }

  doReset(): void {
    this.registrationErr = false;
    this.alertMsg = '';
    this.email = '';
    this.password = '';
    this.confirm = '';
  }

  doRegister(): void {
    if (this.email == '' || this.password == '' || this.confirm == '') {
      this.alertMsg = 'Error: All fields are required.';
      this.registrationErr = true;
    } else if (this.password != this.confirm) {
      this.alertMsg = 'Error: Passwords do not match.';
      this.registrationErr = true;
    } else {
      if (this.authService.register(this.email)) {
        this.goLogin();
      } else {
        this.alertMsg = 'Error: Registration unsuccessful.';
        this.registrationErr = true;
      }
    }
  }

  goLogin(): void {
    this.doReset();
    this.router.navigate(['/login']);
  }
}
