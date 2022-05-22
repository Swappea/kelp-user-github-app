import { Component, OnInit } from '@angular/core';

import { User } from '../Model';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  constructor() { }

  userData: User[];

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('currentuser') || '[]');
  }

  clearSearches() {
    localStorage.removeItem('currentuser');
    this.userData = [];
  }

}
