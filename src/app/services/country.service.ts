import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url:any;

  constructor(public http:HttpClient) { 
    this.url = environment.apiUrl;
  }

  public getCountries() {
    return this.http.get('/assets/json/country.json')
      .pipe(
        map(res => res)
      );
  }
}
