import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './views/forms/forms.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { SidenavComponent } from './Layouts/sidenav/sidenav.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { PagenotFoundComponent } from './views/pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    routingComponents,
    DashboardComponent,
    NavbarComponent,
    PagenotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
