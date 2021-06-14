import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';


@Component({
  selector: 'app-test-top-speeding',
  templateUrl: './test-top-speeding.component.html',
  styleUrls: ['./test-top-speeding.component.scss']
})
export class TestTopSpeedingComponent implements OnInit {

  tilList = ['上站驱动', '中站驱动'];

  get dataSource() {
    return this.mqttService.dataDictionary['超速测试'] ? this.mqttService.dataDictionary['超速测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
