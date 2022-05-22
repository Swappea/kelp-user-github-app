import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'user-search',
    component: UserSearchComponent,
  },
  {
    path: 'user-history',
    component: UserHistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
