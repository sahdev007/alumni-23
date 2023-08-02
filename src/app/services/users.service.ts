import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: any;
  public filteredData = new Subject<any>();
  public activeUser = new Subject<any>();

  constructor(public http: HttpClient) {
    this.url = environment.apiUrl;
  }

  public getData(action?:string, data?: any) {
    return this.http.get(`${this.url}/${action}`);
  }
  /**
   * Api to get all users
   * @returns 
   */
  public getAllUsers() {
    return this.http.get(`${this.url}/all-users`);
  }
  /**
   * Api to get user By Id
   * @param id 
   * @returns 
   */
  public getUsersById(id: number) {
    return this.http.get(`${this.url}/find-user/${id}`).toPromise();
  }

  /**
   * Api to delete user by Id
   * @param id 
   * @returns 
   */
  public deleteUserById(id: number) {
    return this.http.delete(`${this.url}/delete-user/${id}`);
  }

  public isActiveUser(data: any) {
    return this.http.put(`${this.url}/user-verify`, data);
  }

  /**
   * Api to filter user data by params
   * @param data 
   * @returns 
   */
  public filterUsers(data: any) {
    return this.http.post(`${this.url}/filter`, data);
  }

  public filterEntrepreneur(data: any) {
    return this.http.post(`${this.url}/filter-entrepreneur`, data);
  }
  /**
   * Filter Mentor Data
   */
  public filterMentorship(data: any) {
    return this.http.post(`${this.url}/filterDataMentor`, data);
  }
  /**
   * Filter Mentee Data
   * @param data 
   * @returns 
   */
  public filterMentee(data: any) {
    return this.http.post(`${this.url}/filterDataMentee`, data);
  }

  /**
   * Api to update user Data
   * @param data 
   * @returns 
   */
  public resetPassword(data: any) {
    return this.http.put(`${this.url}/updatePassword/${data?.id}`, data );
  }

  /**
   * Api to update user Status
   * @param data 
   * @returns 
   */
  public onChangeStatus(status:any) {
    return this.http.post(`${this.url}/updateStatus/${status?.id}`, status);
  }

  /**
   * Send data to parent page
   */
  public sendFilteredData() {
    this.filteredData.next("");
  }

  public sendActiveUserData() {
    this.activeUser.next('');
  }

  public destroyFilter() {
    return this.filteredData.unsubscribe();
  }
}
