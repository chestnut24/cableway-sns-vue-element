import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../services/mqtt.service';

@Component({
  selector: 'app-data-test',
  templateUrl: './data-test.component.html',
  styleUrls: ['./data-test.component.scss']
})
export class DataTestComponent implements OnInit {
  dataSourceTitle = [];
  dataSource = {};
  constructor(public mqttService: MqttService) { }

  ngOnInit() {
    this.mqttService.init();
    this.mqttService.dataChange.subscribe(data => {
      this.dataSource = [];
      this.dataSourceTitle = Object.keys(data);
      Object.keys(data).forEach(key => {
        this.dataSource[key] = [];
        Object.keys(data[key]).forEach(item => {
          this.dataSource[key].push({
            name: item,
            key: data[key][item].key,
            value: data[key][item].value});
        });
      });
      console.log(this.dataSource)
    });
  }

  typeOf(value) {
    return typeof value;
  }
  send(obj, e) {
    console.log('send', obj, e)
    this.mqttService.publish(obj.key, e);
  }

}
