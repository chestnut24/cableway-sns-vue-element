import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseResult} from '../public/interface/common';
import {UseDirection} from '../public/interface/use-direction';
import {FaultList} from '../public/interface/fault';
import {API} from '../public/api';

export interface TokenMsg<T> {
    success: boolean;
    data: T;
    code: number;
    msg: string;
}
export interface LIstMsg<T> {
    size: number;
    records: T;
    total: number;
    current?: number;
    orders: any;
    hitCount: boolean;
    searchCount: boolean;
    pages: number;
}

@Injectable({
    providedIn: 'root'
})
export class FaultService {
    constructor(private http: HttpClient) { }

    searchFault(params: {pageNum, pageSize, startTime?: string, endTime?: string}): Observable<TokenMsg<LIstMsg<FaultList[]>>> {
        return this.http.get <TokenMsg<LIstMsg<FaultList[]>>> (API.SEARCH_LIST, {params});
    }

    getExport(): Observable<any> {
        // @ts-ignore
        return this.http.get<any>(API.EXPORT_FAULT, { responseType: 'blob' });
        // return this.http.post<any>(`${API.GET_EXPORT_B}`, params);
    }
}
