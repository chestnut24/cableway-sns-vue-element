import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService, NzMessageService } from 'ng-zorro-antd';
import { AddUserComponent } from './components/add-user/add-user.component';
import { User } from '../../../public/interface/user';
import { UserService } from '../../../services/user.service';
import { EntityType } from '../../../public/interface/common';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    dataSet: User[];
    indeterminate = false;
    allChecked = false;
    checkedNumber = 0;
    selectedIds: string[] = [];

    tableTotal = 0;
    pageNum = 1;
    pageSize = 10;
    searchText = '';
    text;
    timer;
    constructor(
        private modalService: NzModalService,
        private userService: UserService,
        private messageService: NzMessageService
    ) { }

    ngOnInit() {
        this.InitTable(false);
    }
    InitTable(isRefresh) {
        // tslint:disable-next-line:no-unused-expression
        isRefresh ? this.pageNum = 1 : null;
        this.dataSet = [];
        this.userService.getUsersList({
            pageNum: this.pageNum - 1,
            pageSize: this.pageSize,
            searchText: this.searchText,
        }).subscribe(data => {
            this.dataSet = data.content;
            this.tableTotal = data.totalElements;
            this.refreshStatus();
        });
    }

    refreshStatus(): void {
        this.selectedIds = [];
        const allChecked = this.dataSet.every(value => value.checked === true);
        const allUnChecked = this.dataSet.every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
        this.checkedNumber = this.dataSet.filter(value => value.checked).length;
        this.dataSet.forEach(item => {
            if (item.checked) {
                this.selectedIds.push(item.id);
            }
        });
    }
    checkAll(value: boolean): void {
        this.dataSet.forEach(data => data.checked = value);
        this.refreshStatus();
    }

    batchDelete(): void {
        // tslint:disable-next-line:no-unused-expression
        this.selectedIds.length > 0 ? this.deleteUsers(this.selectedIds) : null;
    }

    deleteUsers(idList: string[]): void {
        this.modalService.confirm({
            nzTitle: '删除用户',
            nzContent: `<span style="color:red">用户删除后将不可恢复</span>`,
            nzOkText: '删除',
            nzOkType: 'danger',
            nzIconType: 'exclamation-circle',
            nzOnOk: () => {
                this.userService.deleteUsers(idList).subscribe(success => {
                    this.messageService.create('success', '删除成功');
                    this.InitTable(true);
                }, error => {
                    this.messageService.create('error', '删除失败');
                });
            },
            nzCancelText: '取消',
            nzOnCancel: () => { },
        });
    }

    modifyUser(user) {
        this.createUserModal('修改' + user.name, user, true);
    }

    addUser() {
        this.createUserModal('新增用户', {
            name: null,
            roleId: null,
            phone: null,
            remark: null,
        }, false);
    }

    createUserModal(title: string, user: User, hidePassword: boolean): void {
        let showload = false;
        const modal = this.modalService.create({
            nzTitle: title,
            nzWidth: '700px',
            nzComponentParams: {
                user,
                hidePassword
            },
            nzContent: AddUserComponent,
            nzFooter: [
                {
                    label: '取消',
                    shape: 'default',
                    onClick: () => modal.destroy()
                },
                {
                    label: '确定',
                    type: 'primary',
                    loading: () => showload,
                    disabled: (contentComponentInstance) => !contentComponentInstance.userForm.valid,
                    onClick: (contentComponentInstance) => {
                        showload = true;
                        const cci = contentComponentInstance;
                        this.userService.modifyUser({
                            id: user.id,
                            name: cci.userForm.value.name,
                            staffNo: cci.userForm.value.staffNo,
                            phone: cci.userForm.value.phone,
                            roleId: cci.userForm.value.roles,
                            // tslint:disable-next-line:max-line-length
                            // password: cci.userForm.value.password ? cci.userForm.value.password.toLowerCase() : cci.userForm.value.password,
                            password: cci.userForm.value.password,
                            remark: cci.userForm.value.remark,
                            post: cci.userForm.value.post,
                            avatar: '',
                        }).subscribe(success => {
                            this.messageService.create('success', `${title}成功`);
                            this.InitTable(true);
                            showload = false;
                            modal.destroy();
                        }, error => {
                            this.messageService.create('error', `${title}失败 ${error.error.message}`);
                            showload = false;
                        });
                    }
                }
            ]
        });
    }


    setTimer() {
        if (this.timer) { clearTimeout(this.timer); }
        this.timer = setTimeout(() => {
            if (this.text === this.searchText) {
                this.InitTable(true);
            }
        }, 500);
    }

    keyUpSearch() {
        this.text = this.searchText;
        this.setTimer();
    }

}
