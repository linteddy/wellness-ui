import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public href = '';
  public menu = '';

  constructor(private router: Router, private auth: AuthenticationService) {
  }


  show() {
    this.href = '' + this.router.url;
    if (this.href === '/view') {
      this.menu = 'High Risk Patients';
      return true;
    }
    if (this.href === '/dashboard') {
      this.menu = 'Wellness Dashboard';
      return true;
    }
    if (this.href === '/capture') {
      this.menu = 'Capture Result';
      return true;
    }
    return false;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
