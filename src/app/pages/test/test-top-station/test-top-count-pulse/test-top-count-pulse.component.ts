import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-top-count-pulse',
  templateUrl: './test-top-count-pulse.component.html',
  styleUrls: ['./test-top-count-pulse.component.scss']
})
export class TestTopCountPulseComponent implements OnInit {

  get dataSource() {
    return this.mqttService.dataDictionary['计数脉冲测试'] ? this.mqttService.dataDictionary['计数脉冲测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
