import { Component, OnInit } from '@angular/core';
import { UploadFile, NzModalService, NzMessageService } from 'ng-zorro-antd';
import { UpFileComponent } from '../up-file/up-file.component';
import { UseDirectionService } from 'src/app/services/use-direction.service';

@Component({
  selector: 'app-use-direction',
  templateUrl: './use-direction.component.html',
  styleUrls: ['./use-direction.component.scss']
})
export class UseDirectionComponent implements OnInit {
  pagination = true;
  total = 0;
  dataSet = [];
  pageSize = 10;
  pageIndex = 1;
  loading = true;

  constructor(
      public modalService: NzModalService,
      public UService: UseDirectionService,
      public MessageService: NzMessageService,
  ) { }

  ngOnInit() {
      this.searchFile();
      console.log(location.protocol + '//' + location.hostname + ':' + location.port)
  }
  // 查询文件列表
  searchFile(reset: boolean = false): void {
      if (reset) {
          this.pageIndex = 1;
      }
      this.loading = true;
      this.UService.searchFile().subscribe(success => {
          this.total = success.data.length;
          // tslint:disable-next-line:triple-equals
          if (success.data.length != 0) {
              success.data.forEach((item, index) => {
                  const arr = item.fileUrl.split('\\');
                  // tslint:disable-next-line:max-line-length
                  success.data[index].fileUrl = location.protocol + '//' + location.hostname + ':' + location.port + '/file/' + arr[arr.length - 1];
                  // success.data[index].fileUrl = 'http://172.27.85.64:8081/' + arr[arr.length - 1];
              });
          }
          this.dataSet = success.data;
          this.loading = false;
      }, error => {
          this.MessageService.create('error', `文件查询失败， ${error.error.message}`);
      });
  }

  // 上传文件
  uploadFile() {
      let showload = false;
      const modal = this.modalService.create({
          nzTitle: '附件信息',
          nzContent: UpFileComponent,
          nzComponentParams: {

          },
          nzFooter: [
              {
                  label: '关闭',
                  shape: 'default',
                  onClick: () => { modal.destroy(); }
              },
              {
                  label: '确认',
                  type: 'primary',
                  loading: () => showload,
                  disabled: (contentComponentInstance) => {
                      if (!contentComponentInstance.fileList.length) {
                          if (contentComponentInstance.isDelGo) {
                              return false;
                          } else {
                              return !contentComponentInstance.fileList.length;
                          }
                          return !contentComponentInstance.fileList.length;
                      }
                      return !contentComponentInstance.fileList.length;

                  },
                  onClick: (contentComponentInstance) => {
                      console.log(contentComponentInstance.fileList);
                      console.log(contentComponentInstance.newFile)
                      showload = true;
                      // tslint:disable-next-line:no-conditional-assignment
                      if (contentComponentInstance.fileList.length !== 0) {
                          // @ts-ignore
                          this.UService.upFile(contentComponentInstance.newFile).subscribe(success => {
                              this.MessageService.create('success', '文件上传成功');
                              // this.getListPage();
                              this.searchFile();
                              console.log(success);
                              showload = false;
                              modal.destroy();
                          }, error => {
                              console.log(error);
                              this.MessageService.create('error', `文件上传失败， ${error.error.message}`);
                              showload = false;
                          });
                      } else {
                          showload = false;
                          modal.destroy();
                      }
                  }
              }
          ]
      });
  }

  // 删除文件
  delete(fileId) {
      let showload = false;
      const modal = this.modalService.create({
          nzTitle: '删除文件',
          nzContent: '确认删除该文件吗？',
          nzComponentParams: {

          },
          nzFooter: [
              {
                  label: '关闭',
                  shape: 'default',
                  onClick: () => { modal.destroy(); }
              },
              {
                  label: '确认',
                  type: 'primary',
                  loading: () => showload,
                  onClick: () => {
                      showload = true;
                      this.UService.delFile(fileId).subscribe(success => {
                          this.MessageService.create('success', '文件删除成功');
                          this.searchFile();
                          modal.destroy();
                          showload = false;
                      }, error => {
                          this.MessageService.create('error', `文件删除失败， ${error.error.message}`);
                          modal.destroy();
                          showload = false;
                      });
                  }
              }
          ]
      });
  }

  // 下载文件
  download(url) {

      // const a = document.createElement('a');
      // a.download = '文件';
      // a.href = url;
      // document.querySelector('body').appendChild(a); // 修复firefox中无法触发click
      // a.click();
      // a.remove();
      // try {
      //     const elemIF = document.createElement('iframe');
      //     elemIF.src = url;
      //     elemIF.style.display = 'none';
      //     document.body.appendChild(elemIF);
      // } catch (e) {
      //     alert('下载异常！');
      // }
  }
}


