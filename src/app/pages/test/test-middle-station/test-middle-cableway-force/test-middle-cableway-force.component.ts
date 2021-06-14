import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-middle-cableway-force',
  templateUrl: './test-middle-cableway-force.component.html',
  styleUrls: ['./test-middle-cableway-force.component.scss']
})
export class TestMiddleCablewayForceComponent implements OnInit {

  tilList = ['下站迂回', '中站上行'];
  tilListCmp = [['下站驱动', '中间站上行'], ['下站驱动', '中站上行']];
  get dataSource() {
    return this.mqttService.dataDictionary['抱索力测试'] ? this.mqttService.dataDictionary['抱索力测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
