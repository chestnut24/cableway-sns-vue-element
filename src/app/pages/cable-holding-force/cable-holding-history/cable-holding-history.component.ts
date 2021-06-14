import { Component, OnInit } from '@angular/core';
import {TitleType} from '../../../public/components/jn-table/jn-table.component';
import {JnTableService} from '../../../services/jn-table.service';
import {CableHistory} from '../../../public/interface/cableHistory';
import {CableHistoryService} from '../../../services/cable-history.service';
import {NzMessageService} from 'ng-zorro-antd';
@Component({
  selector: 'app-cable-holding-history',
  templateUrl: './cable-holding-history.component.html',
  styleUrls: ['./cable-holding-history.component.scss']
})
export class CableHoldingHistoryComponent implements OnInit {
  pagination = true;
  total = 0;
  listOfData = [];
  pageSize = 10;
  pageIndex = 1;
  stationPoint = '';
  stationDirect = '';
  searchParams = {
    startTime: '',
    endTime: '',
    zd: '',
    zc: '',
    isNotAlarm: false,
  }
  titleList: Array<TitleType> = [
    {name: '时间', canSort: false, sortField: ''},
    {name: '站点', canSort: false, sortField: ''},
    {name: '进/出站侧', canSort: false, sortField: ''},
    {name: '抱锁力', canSort: false, sortField: ''},
    {name: '停车数值(kg)', canSort: false, sortField: ''},
    {name: '停车数值(kg)', canSort: false, sortField: ''},
    {name: '是否报警/停车', canSort: false, sortField: ''},
  ];
  dateRange = [];
  placeHolder = '请选择';
  radioValue = '否';
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.cableHistory
        .getUsers(this.searchParams)
        .subscribe(data => {
          this.total = data.data.length;
          this.listOfData = data.data;
        });
  }


  constructor(
      public cableHistory: CableHistoryService,
      public MessageService: NzMessageService,
  ) {
  }

  ngOnInit() {
    this.searchData();
    // this.jnTable.observeFunction = this.cableHistory.getCableHistory.bind(this.cableHistory);
    // // this.jnTable.search();
    // this.jnTable.afterRequestReady.subscribe(() => {
    //   console.log('data', this.jnTable.tableData);
    //   console.log('pagesize' , this.jnTable.pageSize);
    //   console.log('total', this.jnTable.tableTotal);
    //   this.cableHistory.getCableHistory( (data) => {
    //     console.log('history' , data);
    //   });
      // for (let i = 0; i < this.jnTable.tableData.length; i++) {
      //   this.tableArray[i] = {
      //     time: this.jnTable.tableData[i].time;
      //   }
      // }
    // });

  }
  search() {
    if (!this.dateRange[0]) {
      this.searchParams.startTime = '';

    } else {
      this.searchParams.startTime = new Date(this.dateRange[0]).getTime().toString();
    }
    if (!this.dateRange[1]) {
      this.searchParams.endTime = '';
    } else {
      this.searchParams.endTime = new Date(this.dateRange[1]).getTime().toString();
    }
    this.searchParams.zd = this.stationPoint;
    this.searchParams.zc = this.stationDirect;
    this.radioValue === '是' ? this.searchParams.isNotAlarm = true :  this.searchParams.isNotAlarm = false;
    this.pageIndex = 1;
    this.cableHistory.getUsers(this.searchParams).subscribe(data => {
      this.total = data.data.length;
      this.listOfData = data.data;
    });
  }
  export() {
    this.cableHistory.getExport().subscribe(success => {
      this.MessageService.create('success', `导出成功`);
      const content = success;
      const eLink = document.createElement('a');
      eLink.download = '抱索力历史记录' + '.xlsx';
      const blob = new Blob([content]);
      eLink.href = URL.createObjectURL(blob);
      eLink.click();
    }, error => {
      console.log(error);
      this.MessageService.create('error', `导出失败， ${error.error.message}`);
    });
    }
}
