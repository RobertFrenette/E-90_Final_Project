import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() { }

  isAuthenticated(): boolean {
  return this.authService.getIsAuthenticated();
  }

  doLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
