import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './_guards/auth.guard';
import {ViewComponent} from './view/view.component';
import {CaptureComponent} from './capture/capture.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'view', component: ViewComponent, canActivate: [AuthGuard]},
  {path: 'capture', component: CaptureComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/dashboard', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

