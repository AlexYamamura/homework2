import { Page22Component } from './page22/page22.component';
import { Page11Component } from './page11/page11.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'page11', component: Page11Component},
  {path: 'page22', component: Page22Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
