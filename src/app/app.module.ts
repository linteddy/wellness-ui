import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AlertService} from './_services/alert.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationService} from './_services/authentication.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CaptureComponent} from './capture/capture.component';
import {ViewComponent} from './view/view.component';
import {AuthGuard} from './_guards/auth.guard';
import {AlertComponent} from './_directives/alert.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {PatientService} from './_services/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CaptureComponent,
    ViewComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AlertService, AuthenticationService, AuthGuard, PatientService, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
