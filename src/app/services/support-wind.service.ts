import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WindSupport} from '../public/interface/wind-support';
import {API} from '../public/api';

@Injectable({
  providedIn: 'root'
})
export class SupportWindService {

  name: '上段18号支架';
  constructor(private http: HttpClient) { }

  getWindData(name): Observable<WindSupport> {
    const params = {name};
    // console.log('params', params);
    return this.http.get<WindSupport>(API.WIND_SUPPORT, {params});
  }
}
