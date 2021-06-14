import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseResult} from '../public/interface/common';
import {UseDirection} from '../public/interface/use-direction';
import {API} from '../public/api';

@Injectable({
    providedIn: 'root'
})
export class UseDirectionService {
    constructor(private http: HttpClient) { }

    upFile(data): Observable<ResponseResult> {
        return this.http.post<ResponseResult>(API.UPLOAD_FILE, data);
    }
    delFile(fileId): Observable<ResponseResult> {
        const params = {fileId};
        return this.http.get<ResponseResult>(API.DEL_FILE, {params});
    }
    searchFile(): Observable<UseDirection> {
        return this.http.get<UseDirection>(API.SEARCH_FILE);
    }
}
