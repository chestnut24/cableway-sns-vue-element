import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-top-cableway-force',
  templateUrl: './test-top-cableway-force.component.html',
  styleUrls: ['./test-top-cableway-force.component.scss']
})
export class TestTopCablewayForceComponent implements OnInit {

  tilList = ['上站驱动', '中站下行'];
  tilListCmp = ['', '中站下行'];
  get dataSource() {
    return this.mqttService.dataDictionary['抱索力测试'] ? this.mqttService.dataDictionary['抱索力测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
