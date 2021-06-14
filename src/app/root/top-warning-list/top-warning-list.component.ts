import {Component, Input, OnInit} from '@angular/core';
import {MqttService} from '../../services/mqtt.service';

@Component({
  selector: 'app-top-warning-list',
  templateUrl: './top-warning-list.component.html',
  styleUrls: ['./top-warning-list.component.scss']
})
export class TopWarningListComponent implements OnInit {
  @Input() dataSource;
  @Input() titleArr;
  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
