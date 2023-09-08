import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {
  url: any;
  constructor(public http: HttpClient) {
    this.url = environment?.apiUrl;
   }

   getAllData(action?: string, data?: any): Observable<any> {
    return this.http
      .get(`${this.url}/${action}`);
  }

  public getDataById(action?: string, id?: any) {
    return this.http.get(`${this.url}/${action}/${id}`);
  }

  postData(action?: any, data?:any): Observable<any> {
    if(action?.action == "") {
      return this.http.post<any>(`${this.url}/${action?.action}`, data);
    } else if(action == "update-donationCategories") {
      return this.http.post<any>(`${this.url}/${action}` + "/" + data?.id,  data);
    } else if(action == "update-donation"){
      return this.http.put<any>(`${this.url}/${action}` + "/" + data?.id,  data);
    } else {
      return this.http.post<any>(`${this.url}/${action}`, data);
    }
  }

  updateData(action?: any, data?: any) {
    if (action == "update-donationCategories") {
      return this.http.post(`${this.url}/${action}/${data?.id}`, data);
    } 
    return this.http.put(`${this.url}/${action}/${data?.id}`, data);
  }

  deleteData(action?: string, id?: any): Observable<any> {
    return this.http.delete(`${this.url}/${action}/${id}`);
  }
}
