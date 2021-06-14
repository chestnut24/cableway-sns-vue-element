import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UploadFile, NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-up-file',
  templateUrl: './up-file.component.html',
  styleUrls: ['./up-file.component.scss']
})
export class UpFileComponent implements OnInit {

  fileList = [];
  isFile = false;
  isDelGo = false;
  newFile;

  constructor(
      public messageService: NzMessageService,
  ) { }

  ngOnInit() {
  }

  handleChange(event) {
  }
  beforeUpload = (file: UploadFile) => {
    this.fileList = [file];
    const formData = new FormData();
    formData.append('file', this.fileList[0]);
    this.newFile = formData;
    this.isFile = false;
    return false;
  }
  getIP(): string {
    return location.protocol + '//' + location.hostname + ':' + location.port;
  }
  del() {
    this.isFile = false;
    this.isDelGo = true;
    this.messageService.create('warning', '请点击确认按钮保存删除操作。');
  }
  time() {
    return new Date();
  }
}
