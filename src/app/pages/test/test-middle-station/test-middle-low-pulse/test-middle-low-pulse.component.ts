import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-middle-low-pulse',
  templateUrl: './test-middle-low-pulse.component.html',
  styleUrls: ['./test-middle-low-pulse.component.scss']
})
export class TestMiddleLowPulseComponent implements OnInit {

  tilList = ['下站迂回', '中站上行'];
  tilListCmp = ['下站', '中站下行'];
  get dataSource() {
    return this.mqttService.dataDictionary['低速轮脉冲测试'] ? this.mqttService.dataDictionary['低速轮脉冲测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
