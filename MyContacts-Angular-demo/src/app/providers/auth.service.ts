import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated = false;

  // Hard-Coded for demo!
  private EMAIL_ADDRESS: string = 'foobar@test.com';
  private PASSWORD:String = 'password';

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === this.EMAIL_ADDRESS && password === this.PASSWORD) {
      this.isAuthenticated = true;
      return  true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  register(email: string): boolean {
    this.isAuthenticated = false;
    if (email === this.EMAIL_ADDRESS) {
      return  false;
    } else {
      return true;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  setIsAuthenticated(authStatus: boolean): void {
    this.isAuthenticated = authStatus;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
