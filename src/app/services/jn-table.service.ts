import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Pagination} from '../public/interface/common';
import {NzMessageService} from 'ng-zorro-antd';
export interface Pagination1<T> {
  data: Array<T>  ;
}
@Injectable({
  providedIn: 'root'
})
export class JnTableService<T> {

  public currentObserve: Observable<Pagination1<T>>;
  // tslint:disable-next-line:variable-name
  private _observeFunction; // 接收服务
  public get observeFunction() {
    return this._observeFunction;
  }
  public set observeFunction(val) {
    this._observeFunction = val;
    this.settingInit();
  }
  public tableData: Array<T> = [];
  public tableTotal = 0;
  public pageSize = 10;
  public pageNum = 1;
  public searchParams = {};
  public orderParams: {order?: string, direction?: 'DESC' | 'ASC'} = {};
  public isLoading = true;
  public afterRequestReady = new Subject(); // 生命周期：在数据加载完后触发
  private isPending = false;
  constructor(private message: NzMessageService) { }

  search(): void {
    this.isLoading = true;
    for (const key in this.searchParams) {
      if (this.searchParams[key] === '' || this.searchParams[key] === null || this.searchParams[key] === undefined) {
        delete this.searchParams[key];
      }
    }
    this.currentObserve = this.observeFunction(Object.assign({}, this.searchParams, {
      pageNum: (this.pageNum - 1).toString(),
      pageSize: this.pageSize.toString(),
    }, this.orderParams));
    this.isPending = false;
    setTimeout(() => {
      if (!this.isPending) {
        this.currentObserve.subscribe(data => {
          this.isLoading = false;
          this.tableData = data.data;
          this.tableTotal = data.data.length;
          this.afterRequestReady.next();
        }, error => {
          this.message.error(`查询失败 ${error.error.message}`);
        });
      }
      this.isPending = true;
    }, 300);
  }
  settingInit(): void {
    this.currentObserve = null;
    this.tableData = [];
    this.tableTotal = 0;
    this.pageSize = 10;
    this.pageNum = 1;
    this.isLoading = true;
    this.searchParams = {};
    this.orderParams = {};
    this.search();
  }
}
