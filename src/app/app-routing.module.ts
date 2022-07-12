import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisitionFormComponent } from './components/requisition-form/requisition-form.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListViewsComponent } from './views/list-views/list-views.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
    path: 'RequisitionForm',
    component:RequisitionFormComponent
  },
  {
    path: 'Settings',
    component:SettingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
