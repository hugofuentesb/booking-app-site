import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntegrationApiService {

  URLBASE = environment.URLBASE;

  constructor(private http: HttpClient) { }

  getLocations(filter: any): Observable<any> {
    // this.http.get('/api/location/').subscribe( (data) => {
    //   console.warn(data);});

      //return this.http.get(`${this.URLBASE}/location/`);
      //return this.http.get(`${this.URLBASE}/location/`, filter);
      return this.http.get(`${this.URLBASE}/location/`, { params: filter } );


  }

  /*
    Getting location types
  */
  getLocationTypes(request: any): Observable<any> {
    return this.http.get(`${this.URLBASE}/locationTypes/`, request);
  }

  /*
    Create a location
  */
  createLocation(request: any): Observable<any> {
    console.warn(request);
    return this.http.post(`${this.URLBASE}/location`, request);
  }

}
