import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../../services/mqtt.service';

@Component({
  selector: 'app-test-middle-middle-tension',
  templateUrl: './test-middle-middle-tension.component.html',
  styleUrls: ['./test-middle-middle-tension.component.scss']
})
export class TestMiddleMiddleTensionComponent implements OnInit {

  get dataSource() {
    return this.mqttService.dataDictionary['上段张紧测试'] ? this.mqttService.dataDictionary['上段张紧测试'] : {};
  }
  value?: string;
  tilList = ['张紧压力-10%', '张紧压力+10%', '张紧传感器'];
  tilListCmp = [['实/测压力', '实/测压力', '测试压差'], ['压力下限', '压力下限', '允许压差']];

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
