import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  return: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/dashboard');

  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          console.log(data);
          const token = data.token;
          localStorage.setItem('role', data.role);
          localStorage.setItem('expiresIn', data.expiresIn);
          if (token) {
            localStorage.setItem('token', token);
            this.router.navigateByUrl(this.return);
          }
        },
        error => {
          const message = 'Invalid username and password provided. Please try again.';
          this.alertService.error(message);
          this.loading = false;
        });
  }

}
