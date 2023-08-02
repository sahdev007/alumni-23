import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { debounceTime, shareReplay } from "rxjs/operators";
import { Person } from '../models/person';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { personsData } from '../models/personData';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class DataService {
  
  url: any;
  headers = new HttpHeaders().append("Content-Type", ["multipart/form-data"]);
  protected _eventsSubject = new Subject<Event>();
  protected _recentSubject = new Subject<Event>();
  public resetForm = new Subject<any>();
  persons$: BehaviorSubject<Person[]>;
  persons: Array<Person> = [];
  constructor(public http: HttpClient) {
    this.url = environment.apiUrl;

    this.persons$ = new BehaviorSubject([]);
    this.persons = personsData;
  }



  getAllData(action?: string, data?: any): Observable<any> {
    return this.http
      .get(`${this.url}/${action}`);
  }


  getAll() {
    this.persons$.next(this.persons);
  }

  add(person: Person) {
    this.persons.push(person);
  }

  edit(person: Person) {
    let findElem = this.persons.find(p => p.id == person.id);

    findElem.title = person.title;
    findElem.phone = person.phone;
    findElem.email = person.email;

    this.persons$.next(this.persons);
  }

  remove(id: number) {

    this.persons = this.persons.filter(p => {
      return p.id != id
    });

    this.persons$.next(this.persons);
  }
  
  public broadcastEvent(value: any) {
    this._eventsSubject.next(value);
  }
/**
   *
   * @param action
   * @param data
   * @returns
   */
public updateData(action?: any, data?: any) {
  if (
    action === "update-featured" ||
    action === "update-gallery" ||
    action === "update-magazine" ||
    action === "update-news" ||
    action === "update-mentorship" ||
    action == "update-event" ||
    action == "update-club" || action == "update-journey"
  ) {
    return this.http.post(`${this.url}/${action}/${data?.id}`, data);
  } else if (action === "update-youtube") {
    return this.http.put(`${this.url}/${action}/${data?.id}`, data);
  } else if (action?.action == "profile-pic") {
    return this.http.post<any>(
      `${this.url}/${action?.action}` + "/" + action?.id,
      data
    );
  }
  else if (action == "update-mentorship") {
    alert('fdjifdj');
    return this.http.post<any>(
      `${this.url}/${action}` + "/" + data?.id,
      data
    );
  }
  return this.http.put(`${this.url}/${action}/${data?.id}`, data);
}
  public listenEvent(): Observable<any> {
    return this._eventsSubject.asObservable();
  }
  /**
   * Api to get data on the basis of action
   * @returns
   */
  public getData(action?: string, data?: any): Observable<any> {
    return this.http
      .get(`${this.url}/${action}`)
      .pipe(shareReplay(), debounceTime(300));
  }
  deleteData(action?: string, id?: any): Observable<any> {
    return this.http.delete(`${this.url}/${action}/${id}`);
  }
  public getDataById(action?: string, id?: any) {
    return this.http.get(`${this.url}/${action}/${id}`);
  }
  /**
   * Api to post data on the basis of action
   * @param action
   * @param data
   * @returns
   */
  public postData(action?: any, data?: any) {
    if (
      action?.action === "update-getFeatured" ||
      action?.action === "update-news" ||
      action?.action === "update-club" ||
      action?.action === "update-team" ||
      action?.action === "update-gallery" ||
      action?.action === "update-event" ||
      action?.action === "updateStatus" ||
      action?.action == "update-journey"
    ) {
      return this.http.post<any>(
        `${this.url}/${action?.action}` + "/" + action?.id,
        data
      );
    } else if (
      action == "update-mentorship" ||
      action == "update-mentee" ||
      action == "filterMentor" ||
      action == "add-menteeMentor"
    ) {
      return this.http.post<any>(
        `${this.url}/${action}` + "/" + data?.user_id,
        data
      );
    } else if (
      action?.action === "create-magazine" ||
      action?.action === "create-news" ||
      action?.action === "create-club" ||
      action?.action === "create-getFeatured" ||
      action?.action === "create-team" ||
      action?.action === "create-gallery" ||
      action?.action === "create-event"
    ) {
      return this.http.post<any>(`${this.url}/${action?.action}`, data);
    } else if (action?.action == "senduser-mail") {
      return this.http.post<any>(
        `${this.url}/${action?.action}` + "/" + action?.id,
        action
      );
    }
    else if(action?.action == "update-setting") {
      return this.http.post<any>(
        `${this.url}/${action?.action}`, data
      );
    }
    return this.http.post<any>(`${this.url}/${action}`, data);
  }
  

  public onChangeStatus(data?: any) {
    if (data?.type == 'update-getFeatured') {
      return this.http.post<any>(
        `${this.url}/${data?.type}` + "/" + data?.id,
        data
      );
    } else if(data?.type == 'update-user') {
      return this.http.put(`${this.url}/${data?.type}/${data?.id}`, data);
    } else {
      return this.http.put(`${this.url}/${data}/${data?.id}`, data);
    }
  }

 
  /**
   * Api to get all institutes name
   * @returns
   */
  public getAllInstitutes() {
    return this.http.get(`${this.url}/all-institute`);
  }

  /**
   * Api to get all Batch year
   */
  public getAllBatches() {
    return this.http.get(`${this.url}/all-batch`);
  }

  /**
   * Api to get All questions
   * @returns
   */
  public getAllQuestions() {
    return this.http.get(`${this.url}/all-questions`);
  }
  /**
   * Add Youtube links
   */
  addYoutubeLink(data: any) {
    return this.http.post<any>(`${this.url}/create-youtube`, data);
  }
  /**
   * Get Youtube links
   */
  getYoutubeLink(action: string) {
    return this.http.get(`${this.url}/${action}`);
  }
  /**
   * Delete youtube link
   */
  deleteYoutubeLink(id: any) {
    return this.http.delete(`${this.url}/delete-splash/${id}`);
  }
  /**
   * Update youtube link
   */
  UpdateYoutubeLink(param: any) {
    return this.http.put(`${this.url}/update-splash/${param.id}`, param);
  }

  getLocationService(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((resp) => {
        resolve({ lat: resp.coords.latitude, lag: resp.coords.longitude });
        reject("wrong address");
      });
    });
  }

  public resetFormData() {
    this.resetForm.next('');
  }

  public destroyEvent() {
    return this._eventsSubject.unsubscribe();
  }

  public castDataEvent(value: any) {
    this._recentSubject.next(value);
  }

  public listenDataEvent(): Observable<any> {
    return this._recentSubject.asObservable();
  }
}
