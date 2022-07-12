import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FormsComponent } from './views/forms/forms.component';
import { LoginComponent } from './views/login/login.component';
import { PagenotFoundComponent } from './views/pagenot-found/pagenot-found.component';

const routes: Routes = [
  {
    path: 'Login',
    component:LoginComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'TS_requisition', component: FormsComponent,
  }
  // page not found
  ,{
    path: '**',
    component: PagenotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormsComponent, LoginComponent];
