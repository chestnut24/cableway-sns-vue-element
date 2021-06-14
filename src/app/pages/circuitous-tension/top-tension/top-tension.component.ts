import {Component, OnInit} from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
    selector: 'app-top-tension',
    templateUrl: './top-tension.component.html',
    styleUrls: ['./top-tension.component.scss']
})
export class TopTensionComponent implements OnInit {

    resetState: boolean; // 自复位按钮状态，按下为true，变为绿色
    DTState: boolean; // 2DT按钮状态，按下为true，变为绿色
    data;

    get dataSource() {
        return this.mqttService.dataDictionary['张紧系统上段张紧'] ? this.mqttService.dataDictionary['张紧系统上段张紧'] : {};
    }

    constructor(public mqttService: MqttService) {
    }

    ngOnInit() {
        // const resetUp = document.getElementById('reset_up');
        // resetUp.onmousedown = resetUp.ontouchstart = ()
    }

    switchFunc(key, value, name) {
        // console.log('key, value', key, value);
        this.mqttService.publish(key, !value);
        this.dataSource[name].value = !this.dataSource[name].value; // 将点位置反
    }

}
