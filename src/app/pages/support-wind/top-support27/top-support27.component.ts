import {Component, OnInit} from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';
import {timeInterval} from "rxjs/operators";

@Component({
    selector: 'app-top-support27',
    templateUrl: './top-support27.component.html',
    styleUrls: ['./top-support27.component.scss']
})
export class TopSupport27Component implements OnInit {

    // inputData = 14;
    inputData;
    storageName = 'topSupport27';
    tabName = '上段27号支架';
    get data() {
        // this.inputData = this.mqttService.dataDictionary['风向和风速']['上段27号支架风速'].value ? this.mqttService.dataDictionary['风向和风速']['上段27号支架风速'].value : 0;
        return this.mqttService.dataDictionary['风向和风速'] ? this.mqttService.dataDictionary['风向和风速'] : {};
    }

    constructor(public mqttService: MqttService) {
    }

    ngOnInit() {
        // if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
        //     this.inputData = this.mqttService.dataDictionary['风向和风速']['上段27号支架风速'].value;
        // }
    }

    controlTime() {
        setTimeout (() => {
            if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
                this.inputData = this.mqttService.dataDictionary['风向和风速']['上段27号支架风速'].value;
            }
        }, 1000);
    }

}
