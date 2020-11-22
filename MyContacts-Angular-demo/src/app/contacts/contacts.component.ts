import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';
import { ContactsService } from './../providers/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Array<any> = [];

  constructor(
    private authService: AuthService,
    private contactsService: ContactsService,
    private router: Router) { }

  ngOnInit() {
    if (!this.authService.getIsAuthenticated()) {
      this.router.navigate(['/']);
    } else {
      this.contacts = this.contactsService.getContacts();
    }
  }
}
