import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.scss']
})
export class ChangeUserComponent implements OnInit {
  validateForm;
  constructor(private fb: FormBuilder, private auth: AuthService, private message: NzMessageService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  submitForm() {
    return this.auth.login(this.validateForm.value.userName, this.validateForm.value.password);
  }

}
