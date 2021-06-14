import {Component, OnInit} from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
    selector: 'app-bottom-tension',
    templateUrl: './bottom-tension.component.html',
    styleUrls: ['./bottom-tension.component.scss']
})
export class BottomTensionComponent implements OnInit {

    resetState: boolean; // 自复位按钮状态，按下为true，变为绿色
    DTState: boolean; // 2DT按钮状态，按下为true，变为绿色
    data;

    get dataSource() {
        return this.mqttService.dataDictionary['张紧系统下段张紧'] ? this.mqttService.dataDictionary['张紧系统下段张紧'] : {};
    }

    constructor(public mqttService: MqttService) {
    }

    ngOnInit() {
        // if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
        //   this.data = this.mqttService.dataDictionary['张紧系统下段张紧'];
        // }
    }

    switchFunc(key, value, name) {
        // console.log('key, value', key, value);
        this.mqttService.publish(key, !value);
        this.dataSource[name].value = !this.dataSource[name].value; // 将点位置反
    }

}
