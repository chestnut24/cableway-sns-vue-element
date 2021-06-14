import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CableHistory} from '../public/interface/cableHistory';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API} from '../public/api';

@Injectable({
  providedIn: 'root'
})
export class CableHistoryService {

  constructor(
      public http: HttpClient,
  ) { }
  getCableHistory(params): Observable<CableHistory> {
    return this.http.get<CableHistory>(API.CABLE_HISTORY, {params});
  }
  getUsers(
      params
      // pageIndex: number = 1,
      // pageSize: number = 10,
      // sortField: string,
      // sortOrder: string,
      // genders: string[],
      // zd: string = '',
      // zc: string = '',
      // startTime: string = '',
      // endTime: string = '',
      // isNotAlarm: boolean = null,
  ): Observable<{ data: CableHistory[] }> {
    // let params = new HttpParams()
        // .append('page', `${pageIndex}`)
        // .append('results', `${pageSize}`)
        // .append('zd', `${zd}`)
        // .append('zc', `${zc}`)
        // .append('startTime', `${startTime}`)
        // .append('endTime', `${endTime}`)
        // .append('isNotAlarm', `${isNotAlarm}`)
        // .append('sortField', sortField)
        // .append('sortOrder', sortOrder);
    // genders.forEach(gender => {
    //   params = params.append('gender', gender);
    // });
    return this.http.get<{ data: CableHistory[] }>(API.CABLE_HISTORY, {
      params
    });
  }
  getExport(): Observable<any> {
    // @ts-ignore
    return this.http.get<any>(API.EXPORT_CABLE_HISTORY, { responseType: 'blob' });
    // return this.http.post<any>(`${API.GET_EXPORT_B}`, params);
  }
}
