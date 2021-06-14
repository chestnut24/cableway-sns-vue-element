import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
  selector: 'app-bottom-support17',
  templateUrl: './bottom-support17.component.html',
  styleUrls: ['./bottom-support17.component.scss']
})
export class BottomSupport17Component implements OnInit {

  storageName = 'bottomSupport17';
  // inputData = 10;
  inputData;
  tabName = '下段17号支架';
  constructor(public mqttService: MqttService) { }

  ngOnInit() {
    // this.controlTime();
    // if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
    //   this.inputData = this.mqttService.dataDictionary['风向和风速']['下段17号支架风速'].value;
    // }
  }

  controlTime() {
    setInterval (() => {
      if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
        this.inputData = this.mqttService.dataDictionary['风向和风速']['下段17号支架风速'].value;
      }
    }, 1000);
  }

}
