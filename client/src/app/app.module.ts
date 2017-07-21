import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import { ApplicantModule } from './applicant/applicant.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { CanActivateAuthGuard } from './can-activate.authguard';
import { AdminAccountModule } from './adminAccount/adminAccount.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    NgbModule.forRoot(),
    ApplicantModule,
    AdminAccountModule
],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, NavService, AuthenticationService, CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
