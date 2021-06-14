import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
  selector: 'app-overview-mid-station',
  templateUrl: './overview-mid-station.component.html',
  styleUrls: ['./overview-mid-station.component.scss']
})
export class OverviewMidStationComponent implements OnInit {
  leftNumberTitle = ['发车脉冲', '1#电机速度', '上段张紧压力1',
                    '排车脉冲', '2#电机速度', '上段张紧压力2',
                    '旁路脉冲', '1#电机电流', '下段张紧压力1',
                    '制动时间', '2#电机电流', '下段张紧压力2'];
  get dataSource() {
    return this.mqttService.dataDictionary['中站总览页面'] ? this.mqttService.dataDictionary['中站总览页面'] : {};
  }
  constructor(public mqttService: MqttService) { }

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
