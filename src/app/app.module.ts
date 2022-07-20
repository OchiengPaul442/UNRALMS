import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewsComponent } from './components/list-views/list-views.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { RequisitionFormComponent } from './views/forms/components/requisition-form/requisition-form.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SettingsComponent } from './views/settings/settings.component';
import { TFVFORMComponent } from './views/forms/components/tfv-form/tfv-form.component';
import { FormsComponent } from './views/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewsComponent,
    NavbarComponent,
    SideNavComponent,
    RequisitionFormComponent,
    DashboardComponent,
    SettingsComponent,
    TFVFORMComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
