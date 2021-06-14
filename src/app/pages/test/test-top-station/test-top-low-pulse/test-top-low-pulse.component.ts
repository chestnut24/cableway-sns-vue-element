import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-top-low-pulse',
  templateUrl: './test-top-low-pulse.component.html',
  styleUrls: ['./test-top-low-pulse.component.scss']
})
export class TestTopLowPulseComponent implements OnInit {

  tilList = ['上站驱动', '中站下行'];
  get dataSource() {
    return this.mqttService.dataDictionary['低速轮脉冲测试'] ? this.mqttService.dataDictionary['低速轮脉冲测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
