import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview-bottom-station',
  templateUrl: './overview-bottom-station.component.html',
  styleUrls: ['./overview-bottom-station.component.scss']
})
export class OverviewBottomStationComponent implements OnInit {
  leftNumberTitle = ['排车脉冲', '1#电机速度', '上段张紧压力1',
    '设定车数', '2#电机速度', '上段张紧压力2',
    '制动时间', '1#电机电流', '下段张紧压力1',
    '旁路脉冲', '2#电机电流', '下段张紧压力2'];
  get dataSource() {
    return this.mqttService.dataDictionary['下站总览页面'] ? this.mqttService.dataDictionary['下站总览页面'] : {};
  }
  value?: string;
  constructor(public mqttService: MqttService, private router: Router) { }

  ngOnInit() {
  }

  title2unit(str) {
    if (str.includes('时间')) return str + '(s)';
    if (str.includes('速度')) return str + '(m/s)';
    if (str.includes('压力')) return str + '(MPa)';
    if (str.includes('电流')) return str + '(A)';
    return str;
  }
}
