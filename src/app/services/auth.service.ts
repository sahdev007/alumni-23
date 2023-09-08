import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: any;
  validLogin: any;

  constructor(public http: HttpClient) {
    this.url = environment.apiUrl;
  }

  /**
   * Api to register user
   * @param data 
   * @returns 
   */
  register(data: any) {
    return this.http.post(`${this.url}/create-register`, data);
  }

  /**
   * Api to login user
   * @param data 
   * @returns 
   */
  login(data: any): Observable<any> {
    return this.http.post(`${this.url}/login`, data);
  }

  getUserRole() {
    return localStorage.getItem("userRole") !== null ? localStorage.getItem("userRole")?.toString() : '';
  }

  /**
   * Function to refresh token
   * @returns 
   */
  refreshToken() {
    return this.http.post<any>(`${this.url}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: any) => {
      this.storeJwtToken(tokens);
    }));
  }

  private getRefreshToken() {
    return localStorage.getItem("currentUser");
  }

  storeJwtToken(jwt: string) {
    localStorage.setItem("token", JSON.stringify(jwt));
  }

  /**
   * Api to forgot password
   * @param data 
   * @returns 
   */
  forgotPassword(data: any) {
    return this.http.post(`${this.url}/forgot-passwords`, data);
  }
  /**
   * Api to Reset password
   * @param data 
   * @returns 
   */
   resetPassword(data: any) {
    return this.http.post(`${this.url}/reset-password`, data);
  }
/**
 * Api to User's Reset Password By Admin
 * @param data 
 * @returns 
 */
  resetPasswordById(data: any) {
    return this.http.post(`${this.url}/reset-passwordByAdmin/${data.id}`, data);
  }
  /**
   * Function to remove token from localstorage
   */
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
  }
}
