import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
  selector: 'app-middle-around',
  templateUrl: './middle-around.component.html',
  styleUrls: ['./middle-around.component.scss']
})
export class MiddleAroundComponent implements OnInit {

  get dataSource() {
    return this.mqttService.dataDictionary['其他'] ? this.mqttService.dataDictionary['其他'] : {};
  }
  get dataSource1() {
    return this.mqttService.dataDictionary['中站总览页面'] ? this.mqttService.dataDictionary['中站总览页面'] : {};
  }
  value?: string;

  btnList = ['进区旁路', '出区旁路', '低速路旁路', '高速路旁路', '抱索力旁路', '出开关旁路', '进开关旁路', '线路旁路', '恢复初始设置', '总旁路'];

  otherBtnList = [
    {name: '车数', type: 'num'},
    {name: '上段已发车数', type: 'num'},
    {name: '下段已发车数', type: 'num'},
    {name: '速度m/s', type: 'num'},
    {name: '复位', type: 'switch'},
    {name: '通知', type: 'switch'},
    {name: '启动', type: 'switch'},
    {name: '正停', type: 'switch'},
    {name: '安停', type: 'switch'},
    {name: '紧急', type: 'switch'},
    {name: '电机选择', type: 'slider', sliders: ['主电机', '辅电机']},
    {name: '方向', type: 'slider', sliders: ['正', '反']},
    {name: '方式', type: 'slider', sliders: ['检修', '运行', '旁路']}];

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

  // 监测车数输入
  changeCarNum(event) {
    const value = event.target.value;
    if (this.dataSource['车数设定']){
      console.log(event.target.value);
      this.dataSource['车数设定'].value = value;
      this.mqttService.publish(this.dataSource['车数设定'].key, value);
    }
  }

  // 上段已发
  changeTopNum(event) {
    const value = event.target.value;
    if (this.dataSource1['上段已发']){
      console.log(event.target.value);
      this.dataSource1['上段已发'].value = value;
      this.mqttService.publish(this.dataSource1['上段已发'].key, value);
    }
  }

  // 下段已发
  changeBottomNum(event) {
    const value = event.target.value;
    if (this.dataSource1['下段已发']){
      console.log(event.target.value);
      this.dataSource1['下段已发'].value = value;
      this.mqttService.publish(this.dataSource1['下段已发'].key, value);
    }
  }
}
