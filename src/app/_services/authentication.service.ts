import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from '../_models/token';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http
      .post<Token>('http://localhost:8090/login', {username: username, password: password}, {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      });

  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('expiresIn');
  }

  // Check whether the token is expired and return
  // true or false
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
}
