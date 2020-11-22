import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  private CONTACTS: Array<any> = [
    { "id": 1, "name": "Stacy Carlson", "email": "stacy@test.com", "cell": "940-046-1801", "birthday": "8/2/1964" },
    { "id": 2, "name": "Nelson Bishop", "email": "nelson@test.com", "cell": "656-098-0894", "birthday": "3/4/1982" },
    { "id": 3, "name": "Raul Hudson", "email": "raul@test.com", "cell": "437-233-4655", "birthday": "5/4/1967" },
    { "id": 4, "name": "Chad Hunt", "email": "chad@test.com", "cell": "113-135-6781", "birthday": "12/4/1975" },
    { "id": 5, "name": "Cassandra Fowler", "email": "cassandra@test.com", "cell": "388-682-2464", "birthday": "3/1/1957" },
    { "id": 6, "name": "Manuel Adams", "email": "manuel@test.com", "cell": "549-154-9132", "birthday": "6/1/1996" },
    { "id": 7, "name": "Swati Verma", "email": "swati@test.com", "cell": "321-184-9017", "birthday": "4/9/1989" },
    { "id": 8, "name": "Corey Smith", "email": "corey@test.com", "cell": "118-937-0416", "birthday": "2/6/1958" },
    { "id": 9, "name": "Colleen Willis", "email": "colleen@test.com", "cell": "362-663-0461", "birthday": "4/1/1981" }
  ];


  constructor() { }

  getContacts() : Array<any> {
    return this.CONTACTS;
  };
}
