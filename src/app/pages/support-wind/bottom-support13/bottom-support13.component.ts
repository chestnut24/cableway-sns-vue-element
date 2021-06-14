import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
  selector: 'app-bottom-support13',
  templateUrl: './bottom-support13.component.html',
  styleUrls: ['./bottom-support13.component.scss']
})
export class BottomSupport13Component implements OnInit {

  storageName = 'bottomSupport13';
  // inputData = 10;
  inputData;
  tabName = '下段13号支架';
  constructor(public mqttService: MqttService) { }

  ngOnInit() {
    // this.controlTime();
    // if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
    //   this.inputData = this.mqttService.dataDictionary['风向和风速']['下段13号支架风速'].value;
    // }
  }

  controlTime() {
    setInterval (() => {
      if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
        this.inputData = this.mqttService.dataDictionary['风向和风速']['下段13号支架风速'].value;
      }
    }, 1000);
  }

}
