import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { RequisitionFormComponent } from './views/forms/components/requisition-form/requisition-form.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListViewsComponent } from './components/list-views/list-views.component';
import { SettingsComponent } from './views/settings/settings.component';
import { FormsComponent } from './views/forms/forms.component';
import { TFVFORMComponent } from './views/forms/components/tfv-form/tfv-form.component';

const routes: Routes = [
  // main routing
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // different form paths
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      {
        path: 'requisition-form',
        outlet: 'Forms',
        component: RequisitionFormComponent
      },
      {
        path: 'tfv-form',
        outlet: 'Forms',
        component: TFVFORMComponent
      }
    ]
    
  },
  // path to settings page
  {
    path: 'Settings',
    component: SettingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
