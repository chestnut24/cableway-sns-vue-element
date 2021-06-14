import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from '../public/api';
import {SpeedElectricity} from '../public/interface/speedElectricity';

@Injectable({
  providedIn: 'root'
})
export class SpeedElectricityService {

  constructor(private http: HttpClient) { }
  getData(position, motorPosition, type): Observable<SpeedElectricity> {
    const params = {position, motorPosition, type};
    // console.log('params', params);
    return this.http.get<SpeedElectricity>(API.SPEED_ELECTRICITY, {params});
  }
}
