import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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
  public register(data: any) {
    return this.http.post(`${this.url}/create-register`, data);
  }

  /**
   * Api to login user
   * @param data 
   * @returns 
   */
  public login(data: any) {
    return this.http.post(`${this.url}/login`, data);
  }

  /**
   * Api to forgot password
   * @param data 
   * @returns 
   */
  public forgotPassword(data: any) {
    return this.http.post(`${this.url}/forgot-passwords`, data);
  }
  /**
   * Api to Reset password
   * @param data 
   * @returns 
   */
   public resetPassword(data: any) {
    return this.http.post(`${this.url}/reset-password`, data);
  }
/**
 * Api to User's Reset Password By Admin
 * @param data 
 * @returns 
 */
  public resetPasswordById(data: any) {
    return this.http.post(`${this.url}/reset-passwordByAdmin/${data.id}`, data);
  }
  /**
   * Function to remove token from localstorage
   */
  public logout() {
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }
}
