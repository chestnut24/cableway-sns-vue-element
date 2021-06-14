/*
* jnTable组件使用说明
* @jnLoading: 是否需要加载中的状态，默认不需要
* @titleList: 表格的th中的内容，其中
*   name：th中展示的名称
*   canSort：是否能排序
*   sortField：排序的字段名
* @nzScrollX: 配合antd Design中的表格列固定
* 新建组件时，只需要在ngOnInit中将该请求的可观察对象赋给DelongTable服务中的 【observeFunction】 即可
*  */

import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {JnTableService} from '../../../services/jn-table.service';
export interface TitleType {
  name: string;
  canSort: boolean;
  sortField: string;
  width?: string;
  right?: string;
}
interface OrderParam {
  key: string;
  value: 'descend' | 'ascend' | null | string;
}
@Component({
  selector: 'app-jn-table',
  templateUrl: './jn-table.component.html',
  styleUrls: ['./jn-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JnTableComponent implements OnInit {
  @Input() jnLoading = false;
  @Input() titleList: Array<TitleType>;
  @Input() nzScrollX: string;
  constructor(public jnTable: JnTableService<any>) { }

  ngOnInit() {
  }

  sort(e: OrderParam): void {
    let orderParams = {};
    if (e.key) {
      switch (e.value) {
        case 'ascend': orderParams = {order: e.key, direction: 'ASC'}; break;
        case 'descend': orderParams = {order: e.key, direction: 'DESC'}; break;
        default : orderParams = {};
      }
    }
    this.jnTable.orderParams = orderParams;
    this.jnTable.search();
  }

}
