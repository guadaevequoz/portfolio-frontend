import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
const URL_API = 'https://argentinaprograma-portfolio.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated: boolean = false;

  constructor(private http: HttpClient) {
    if (sessionStorage.getItem('current')) {
      this.http.get(URL_API + 'validate').subscribe(
        (data) => {
          this.authenticated = true;
        },
        (error) => {
          sessionStorage.clear();
        }
      );
    }
  }

  login(user: Usuario): Observable<any> {
    return this.http
      .post(URL_API + 'login', user, { responseType: 'text' })
      .pipe(
        map((data) => {
          this.authenticated = true;
          sessionStorage.setItem('current', data);
        })
      );
  }

  get Authenticated() {
    return this.authenticated;
  }

  logout() {
    sessionStorage.clear();
    this.authenticated = false;
  }
}
