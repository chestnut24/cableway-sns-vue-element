import {Component, Input, OnInit} from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
  selector: 'app-overview-station-info',
  templateUrl: './overview-station-info.component.html',
  styleUrls: ['./overview-station-info.component.scss']
})
export class OverviewStationInfoComponent implements OnInit {
  @Input() hasStatus;
  get dataSource() {
    return this.mqttService.dataDictionary['驱动站总览页面'] ? this.mqttService.dataDictionary['驱动站总览页面'] : {};
  }
  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
