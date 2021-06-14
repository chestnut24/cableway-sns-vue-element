import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-middle-count-pulse',
  templateUrl: './test-middle-count-pulse.component.html',
  styleUrls: ['./test-middle-count-pulse.component.scss']
})
export class TestMiddleCountPulseComponent implements OnInit {

  get dataSource() {
    return this.mqttService.dataDictionary['计数脉冲测试'] ? this.mqttService.dataDictionary['计数脉冲测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
