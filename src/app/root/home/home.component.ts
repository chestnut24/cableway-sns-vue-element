import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationStart} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {MqttService} from '../../services/mqtt.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ChangeUserComponent} from './components/change-user/change-user.component';
import {ChangePosswordComponent} from './components/change-possword/change-possword.component';
import {FaultService} from '../../services/fault.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    get isFullscreen() {
        // @ts-ignore
        return document.fullscreenElement    || document.msFullscreenElement  || document.mozFullScreenElement || document.webkitFullscreenElement || false;
    }
    isShowLeft = false;
    bottomIconArr = [];
    leftStation = [{
        name: '下站',
        url: './../../../assets/images/left-bar/left-station.png',
        border: '#EDEFF6', // 蓝色#3489FF
        route: 'bottomStation'
    },
        {
            name: '中间站',
            url: './../../../assets/images/left-bar/right-station.png',
            border: '#EDEFF6',
            route: 'midStation'
        },
        {
            name: '上站',
            url: './../../../assets/images/left-bar/right-station.png',
            border: '#EDEFF6',
            route: 'topStation'
        }];
    isClockwise1 = true; // 是否为顺时针
    isClockwise2 = true; // 是否为顺时针
    topMainMachine = 0;
    midMainMachine = 0;
    currentTime = Date.now();
    warnList = [];
    constructor(
        private router: Router,
        public auth: AuthService,
        private user: UserService,
        private activeRoute: ActivatedRoute,
        private route: ActivatedRoute,
        public mqttService: MqttService,
        private modal: NzModalService,
        private message: NzMessageService,
        private faultService: FaultService,
    ) {
    }

    ngOnInit() {
        this.faultService.searchFault({pageNum: 1, pageSize: 5}).subscribe(data => {
            this.warnList = data.data.records;
        });
      const timer = setInterval(() => {
            this.currentTime = Date.now();
      }, 1000);
      const titleArr = ['首页', '总览', '控制运行', '道岔', '张紧系统', '抱索力', '速度电流', '支架风速', '温度', '故障列表',
                        '定位系统', '使用说明', '系统设置', '音乐', '音量', '运维系统', '购物车'];
      const route = {
        抱索力历史记录: '/cableHoldingHistory',
        温度: '/temperature/topStation',
        定位系统: '/developing',
        道岔: '/turnoutPage',
        首页: '/homePage',
        抱索力: '/cableHolding',
        速度电流: '/speedElectricity',
        张紧系统: '/circuitousTension',
        故障列表: '/faultList',
        支架风速: '/supportWind',
        总览: '/overview/top',
        使用说明: '/useDirection',
        控制运行: '/controlRunning',
        系统设置: '/developing',
        音乐: '/developing',
        音量: '/developing',
        运维系统: '/developing',
        购物车: '/developing'
      };
      titleArr.forEach(item => {
        this.bottomIconArr.push(
          {
            name: item,
            // @ts-ignore
            url: `./../../../assets/images/bottom-icon/icon-${item}.png`,
            route: route[item]
          }
        );
      });
      this.mqttService.init();
      let top1 = 0;
      let top2 = 0;
      let bottom1 = 0;
      let bottom2 = 0;
      this.mqttService.dataChange.subscribe(data => {
          // 上站2#主电机 上站3#主电机 运行电流
          if (data['上站2#主电机'] && data['上站3#主电机']) {
              if (data['上站2#主电机'].运行电流.value) { top1 = data['上站2#主电机'].运行电流.value; }
              if (data['上站3#主电机'].运行电流.value) { top2 = data['上站3#主电机'].运行电流.value; }
              if (data['上站2#主电机'].运行电流.value && data['上站3#主电机'].运行电流.value) {
                  this.topMainMachine = Number((top1 + top2).toFixed(2));
              }
          }
          if (data['中站2#主电机'] && data['中站3#主电机']) {
              if (data['中站2#主电机'].运行电流.value) { bottom1 = data['中站2#主电机'].运行电流.value; }
              if (data['中站3#主电机'].运行电流.value) { bottom2 = data['中站3#主电机'].运行电流.value; }
              if (data['中站2#主电机'].运行电流.value && data['中站3#主电机'].运行电流.value) {
                  this.midMainMachine = Number((bottom1 + bottom2).toFixed(2));
              }
          }
          if (data['首页左侧拉出'] && data['首页左侧拉出']['上站运行速度']) {
              this.isClockwise1 = data['首页左侧拉出']['上站运行速度'].value >= 0;
          }
          if (data['首页左侧拉出'] && data['首页左侧拉出']['中站运行速度']) {
              this.isClockwise2 = data['首页左侧拉出']['中站运行速度'].value >= 0;
          }
      });
    }

    openLeft(e): void {
        e.stopPropagation();
        this.isShowLeft = !this.isShowLeft;
    }

    logout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }

    bottomClick(route) {
        this.router.navigate([`${route}`]);
    }

    sideClick(route) {
        this.router.navigate([`${route}`]);
        this.isShowLeft = !this.isShowLeft;
    }

    // 点击跳转到测试页面
    gotoTest() {
        this.router.navigate(['/test']);
    }
    changeUser() {
        const modal = this.modal.create({
            nzTitle: '更换用户',
            nzContent: ChangeUserComponent,
            nzFooter: [
                {
                    label: '取消',
                    onClick: componentInstance => {
                        modal.destroy();
                    }
                },
                {
                    label: '确定',
                    type: 'primary',
                    onClick: componentInstance => {
                        componentInstance.submitForm().subscribe(data => {
                            this.message.success('更新成功');
                            modal.destroy();
                        }, error => {
                            this.message.error('更新失败');
                        });
                    }
                }
            ]
        });
    }
    changePassword() {
        const modal = this.modal.create({
            nzTitle: '更改密码',
            nzContent: ChangePosswordComponent,
            nzFooter: [
                {
                    label: '取消',
                    onClick: componentInstance => {
                        modal.destroy();
                    }
                },
                {
                    label: '确定',
                    type: 'primary',
                    onClick: componentInstance => {
                        componentInstance.submitForm().subscribe(data => {
                            this.message.success('更新成功');
                            modal.destroy();
                        }, error => {
                            this.message.error('更新失败');
                        });
                    }
                }
            ]
        });
    }
    currentRoute(route) {
        if (route && route !== '/developing') {  return this.router.url.includes(route.split('/')[1]); }
        return false;
    }
}
