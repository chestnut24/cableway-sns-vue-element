import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {NzMessageService} from 'ng-zorro-antd';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-change-possword',
  templateUrl: './change-possword.component.html',
  styleUrls: ['./change-possword.component.scss']
})
export class ChangePosswordComponent implements OnInit {
  validateForm;
  constructor(private fb: FormBuilder, private auth: AuthService, private message: NzMessageService, private userService: UserService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
    });
  }
  submitForm() {
    return this.userService.updatePassword(this.validateForm.value.password, this.validateForm.value.newPassword);
  }
}
