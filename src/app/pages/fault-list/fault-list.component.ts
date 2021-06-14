import { Component, OnInit } from '@angular/core';
import { FaultService } from 'src/app/services/fault.service';
import { JnTableService } from 'src/app/services/jn-table.service';
import { TitleType } from 'src/app/public/components/jn-table/jn-table.component';
import { UploadFile, NzModalService, NzMessageService } from 'ng-zorro-antd';
import {UseDirectionService} from '../../services/use-direction.service';

@Component({
  selector: 'app-fault-list',
  templateUrl: './fault-list.component.html',
  styleUrls: ['./fault-list.component.scss']
})
export class FaultListComponent implements OnInit {

  titleList = [
    { name: '报警名称'},
    { name: '报警模块'},
    { name: '报警时间'}
  ];
  pagination = false;
  total = 0;
  listOfData = [];
  // pageSize = 10;
  searchParams = {
    startTime: '',
    endTime: '',
    pageNum: 1,
    pageSize: 10,
  };
  loading = true;


  dateRange = [];
  sendData = {
    startTime: null,
    endTime: null,
    time: null,
  };




  constructor(
      public FService: FaultService,
      public modalService: NzModalService,
      public MessageService: NzMessageService,
      public JnTable: JnTableService<any>,
  ) { }

  ngOnInit() {
    // this.searchData();
    this.searchData();
    // tslint:disable-next-line:only-arrow-functions
    document.getElementById('datePicker').onclick = function() {
      const elem = document.activeElement as HTMLInputElement;
      elem.blur();
    };
    // this.JnTable.observeFunction = this.FService.searchFault.bind(this.FService);
  }

  searchData(): void {
    this.loading = true;
    // tslint:disable-next-line:max-line-length
    this.FService.searchFault(this.searchParams).subscribe(success => {
      // this.total = success.data.records.length;
      this.total = success.data.total;
      this.listOfData = success.data.records;
      this.loading = false;
    }, error => {
      this.MessageService.create('error', `查询失败， ${error.error.message}`);
    });
  }


    changePageIndex(pageIndex) {
    console.log(pageIndex);
    this.searchParams.pageNum = pageIndex;
    this.searchData();
  }
  // changePageSize(pageSize) {
  //   this.searchParams.pageSize = pageSize;
  //   this.searchData();
  // }

  onChange(result): void {
    if (result && result.length) {
      // tslint:disable-next-line:max-line-length
      const startTime = new Date(result[0]).getFullYear() + '-' + (new Date(result[0]).getMonth() + 1) + '-' + new Date(result[0]).getDate();
      this.searchParams.startTime = new Date(startTime).getTime().toString();
      const endTime = new Date(result[1]).getFullYear() + '-' + (new Date(result[1]).getMonth() + 1) + '-' + new Date(result[1]).getDate();
      this.searchParams.endTime = new Date(endTime).getTime().toString();
      // this.searchParams.endTime = new Date(result[1]).getTime().toString();
    } else {
      this.searchParams.startTime = '';
      this.searchParams.endTime = '';
    }
    // this.JnTable.searchParams = this.sendData;
    // this.JnTable.pageNum = 1;
    this.searchData();
  }
// 导出
  export() {
    this.FService.getExport().subscribe(success => {
      this.MessageService.create('success', `导出成功`);
      const content = success;
      const eLink = document.createElement('a');
      eLink.download = '故障和警示列表' + '.xlsx';
      const blob = new Blob([content]);
      eLink.href = URL.createObjectURL(blob);
      eLink.click();
    }, error => {
      console.log(error);
      this.MessageService.create('error', `导出失败， ${error.error.message}`);
    });
  }
// 打印
  print() {
    const printContent = document.getElementsByClassName('ant-table-content')[0];
    const WindowPrt = window.open('', '', 'left=0,top=0,width=794,height=1090,toolbar=0,scrollbars=0,status=0');
    // @ts-ignore
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
}
