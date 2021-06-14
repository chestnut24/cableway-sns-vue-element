import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-top-middle-drive',
  templateUrl: './test-top-middle-drive.component.html',
  styleUrls: ['./test-top-middle-drive.component.scss']
})
export class TestTopMiddleDriveComponent implements OnInit {

  get dataSource() {
    return this.mqttService.dataDictionary['中站驱动单闸制动测试'] ? this.mqttService.dataDictionary['中站驱动单闸制动测试'] : {};
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }
  setHeight() {
    if (!this.dataSource['运行速度']) {
      return '0%' ;
    } else {
      const value = this.dataSource['运行速度'].value;
      if (value >= 0) {
        return value > 7 ? '64%' : value * 9 + '%';
      } else {
        return value < -4 ? '36%' : Math.abs(value) * 9 + '%';
      }
    }
  }
  setBottom() {
    if (!this.dataSource['运行速度']){
      return '102px' ;
    } else {
      const value = this.dataSource['运行速度'].value;
      if (value >= 0) {
        return '102px';
      } else {
        return value > -4 ? ((102 - 280 * (Math.abs(value) * 9 / 100)) + 'px') : ((102 - 280 * 36 / 100 ) + 'px');
      }
    }
  }
}
