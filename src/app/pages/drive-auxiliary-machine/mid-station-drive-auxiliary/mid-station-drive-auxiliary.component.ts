import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
  selector: 'app-mid-station-drive-auxiliary',
  templateUrl: './mid-station-drive-auxiliary.component.html',
  styleUrls: ['./mid-station-drive-auxiliary.component.scss']
})
export class MidStationDriveAuxiliaryComponent implements OnInit {
  openLowSpeed = true;
  stateLowSpeed = true;
  openHighSpeed = true;
  stateHighSpeed = true;
  constructor(
      public mqttService: MqttService,
  ) { }
  get speedSignal() {
    return this.mqttService.dataDictionary['中站开闸信号'] ? this.mqttService.dataDictionary['中站开闸信号'] : {};
  }

  ngOnInit() {
    this.mqttService.dataChange.subscribe( () => {
      if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
        this.openLowSpeed = this.speedSignal['低速闸开闸抱闸动作'].value;
        this.stateLowSpeed = this.speedSignal['低速闸到位信号'].value;
        this.openHighSpeed = this.speedSignal['高速闸开闸抱闸动作'].value;
        this.stateHighSpeed = this.speedSignal['高速闸到位信号'].value;
      }
    });
  }

}
