import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../Model';

const STATUS = Object.freeze({
  initialized: 'initialized',
  loading: 'loading',
  ready: 'ready',
  error: 'error',
  notFound: 'notFound',
})

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  StatusType = STATUS;
  userSearch: string = '';
  userData: User;
  status: string = STATUS.initialized;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  // TODO: Could be moved to service
  setLocalStorage() {
    const arr: User[] = JSON.parse(localStorage.getItem('currentuser') || '[]');
    const found = arr.find(({ id }) => this.userData.id === id);

    if (!found) {
      arr.push(this.userData);
    }
    localStorage.setItem('currentuser', JSON.stringify(arr));
  }

  onSearchHandler() {
    this.status = STATUS.loading;
    this.http.get<User>(`https://api.github.com/users/${this.userSearch}`)
      .subscribe((response: User) => {
        this.userData = response;
        this.status = STATUS.ready;
        this.setLocalStorage();
      }, (error) => {
        if (error.status === 404) {
          this.status = STATUS.notFound;
        }
      });
  }

}
