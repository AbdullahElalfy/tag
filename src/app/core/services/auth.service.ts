import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoot } from '../api-root/api-root';
import { Observable } from 'rxjs';
import { IRege } from '../interface/i-rege';
import { ILog } from '../interface/i-log';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  signUp(userData: IRege): Observable<any> {
    return this._httpClient.post(
      `https://e-commerce-serverside.vercel.app/api/users`,
      userData
    );
  }
  logIn(userDatalog: ILog): Observable<any> {
    return this._httpClient.post(
      `https://e-commerce-serverside.vercel.app/api/users/auth`,
      userDatalog
    );
  }
  authorized(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }
  logOut(): Observable<any> {
    return this._httpClient.post(
      `https://e-commerce-serverside.vercel.app/api/users/logout`,
      {}
    );
  }
}
