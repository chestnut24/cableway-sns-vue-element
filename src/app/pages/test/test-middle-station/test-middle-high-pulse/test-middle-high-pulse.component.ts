import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-middle-high-pulse',
  templateUrl: './test-middle-high-pulse.component.html',
  styleUrls: ['./test-middle-high-pulse.component.scss']
})
export class TestMiddleHighPulseComponent implements OnInit {

  tilList = ['下站迂回', '中站上行'];
  tilListCmp = ['下站', '中站下行'];
  get dataSource() {
    return this.mqttService.dataDictionary['高速轮脉冲测试'] ? this.mqttService.dataDictionary['高速轮脉冲测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
