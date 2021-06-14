import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import echarts = require('echarts');
import {MqttService} from '../../../services/mqtt.service';
import {SupportWindService} from '../../../services/support-wind.service';

@Component({
    selector: 'app-top-support18',
    templateUrl: './top-support18.component.html',
    styleUrls: ['./top-support18.component.scss']
})

export class TopSupport18Component implements OnInit {

    storageName = 'topSupport18';
    tabName = '上段18号支架';
    // inputData = 10;
    inputData;
    windData;

    // get data() {
    //     // this.inputData = this.mqttService.dataDictionary['风向和风速']['上段27号支架风速'].value ? this.mqttService.dataDictionary['风向和风速']['上段27号支架风速'].value : 0;
    //     return this.mqttService.dataDictionary['风向和风速'] ? this.mqttService.dataDictionary['风向和风速'] : {};
    // }

    constructor(
        public mqttService: MqttService,
    ) {
    }

    ngOnInit() {
    }


}
