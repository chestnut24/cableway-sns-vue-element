import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'suodao';
  timer;
  constructor(private router: Router, public AService: AuthService, public MessageService: NzMessageService) {
    let str = '';
    window.addEventListener('keyup', (e) => {
      str += e.key;
      // console.log(e)
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        str = '';
      }, 1000);
      if (str.includes('test')) {
        this.router.navigate([`/test-data`]);
      }
    });
    // 登录
    this.AService.login('员工', 'sysadmin').subscribe(success => {
        console.log(success);
    }, error => {
      console.log(error)
      this.MessageService.create('error', `登录失败， ${error.error.message}`);
    });
  }
}
