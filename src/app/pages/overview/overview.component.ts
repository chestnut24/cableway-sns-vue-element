import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MqttService} from '../../services/mqtt.service';
import {AuthService} from '../../services/auth.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  get radioStationValue() {
    const url = this.router.url;
    return url.split('/')[2] ? url.split('/')[2] : 'top';
  }
  set radioStationValue(value) {
    this.router.navigate([`/overview/${value}`]);
  }
  get dataSource() {
    return this.mqttService.dataDictionary['驱动站总览页面'] ? this.mqttService.dataDictionary['驱动站总览页面'] : {};
  }
  nodes = [
    {
      title: '上站',
      key: '100',
      expanded: true,
      icon: 'smile',
      children: [
        { title: '上站信息状态', key: '10010', isLeaf: true, route: '/topStation'},
        { title: '上站区域', key: '10011', isLeaf: true, route: '/overview/top' },
        { title: '上站设备', key: '10012', isLeaf: false, expanded: true, children: [
            { title: '上站张紧', key: '100120', isLeaf: true, route: '/circuitousTension'},
            { title: '上站温度', key: '100121', isLeaf: true, route: '/temperature/topStation'},
            { title: '上站主电机', key: '100122', isLeaf: true, route: '/speedElectricity/speedElectTopStation'},
            { title: '上站驱辅机', key: '100123', isLeaf: true, route: '/driveAuxiliary/topStation'},
          ]
        },
      ]
    },
    {
      title: '中间站',
      key: '200',
      expanded: true,
      icon: 'smile',
      children: [
        { title: '中间站信息状态', key: '20010', isLeaf: true, route: '/midStation'},
        { title: '中间站区域', key: '20011', isLeaf: true, route: '/overview/mid'},
        { title: '中间站设备', key: '20012', isLeaf: false, expanded: true, children: [
            { title: '中间站温度', key: '200121', isLeaf: true, route: '/temperature/midStation'},
            { title: '中间站主电机', key: '200122', isLeaf: true, route: '/speedElectricity/speedElectMidStation'},
            { title: '中间站驱辅机', key: '200123', isLeaf: true, route: '/driveAuxiliary/midStation'},
          ]
        },
      ]
    },
    {
      title: '下站',
      key: '300',
      expanded: true,
      icon: 'smile',
      children: [
        { title: '下站信息状态', key: '30010', isLeaf: true, route: '/bottomStation'},
        { title: '下站区域', key: '30011', isLeaf: true, route: '/overview/bottom'},
        { title: '下站设备', key: '30012', isLeaf: false, expanded: true, children: [
            { title: '下站张紧', key: '300120', isLeaf: true, route: '/circuitousTension/bottom'},
          ]
        },
      ]
    },
    {
      title: '测试',
      key: '400',
      expanded: true,
      icon: 'smile',
      children: [
        { title: '上站测试页面', key: '40010', isLeaf: true, route: '/test/testTopStation'},
        { title: '中间站测试页面', key: '40011', isLeaf: true, route: '/test/testMiddleStation'},
      ]
    },
    { title: '控制运行', key: '500', isLeaf: true, route: '/controlRunning'},
    { title: '道岔', key: '600', isLeaf: true, route: '/turnoutPage'},
    { title: '抱索力', key: '700', isLeaf: true, route: '/cableHolding'},
    { title: '支架', key: '800', isLeaf: true, route: '/supportWind'},

  ];
  currentNode = '上站';
  constructor(private router: Router, public mqttService: MqttService, public auth: AuthService, private message: NzMessageService) { }

  ngOnInit() {
    console.log(this.router.url);
  }
  nzEvent(e) {
    this.currentNode = e.node.origin.title;
    if (e.node.origin.route) {
      if (e.node.origin.route.includes('/test/') && this.auth['currentUser'] !== '超级管理员') {
          this.message.error('无权限访问该页面');
      } else {
        this.routerLink(e.node.origin.route);
      }
    }
  }

  routerLink(route) {
    this.router.navigate([`${route}`]);
  }

}
