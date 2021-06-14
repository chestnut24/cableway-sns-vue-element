import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-top-high-pulse',
  templateUrl: './test-top-high-pulse.component.html',
  styleUrls: ['./test-top-high-pulse.component.scss']
})
export class TestTopHighPulseComponent implements OnInit {

  tilList = ['上站驱动', '中站下行'];
  tilListCmp = ['上站', '中站下行'];
  get dataSource() {
    return this.mqttService.dataDictionary['高速轮脉冲测试'] ? this.mqttService.dataDictionary['高速轮脉冲测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
