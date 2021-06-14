import {Component, OnInit} from '@angular/core';
import {MqttService} from '../../services/mqtt.service';

@Component({
    selector: 'app-circuitous-tension',
    templateUrl: './circuitous-tension.component.html',
    styleUrls: ['./circuitous-tension.component.scss']
})
export class CircuitousTensionComponent implements OnInit {

    // 1红色，0绿色 false是0
    data;
    titleArr = ['张紧系统上段张紧', '张紧系统下段张紧', '风向和风速'];
    dataSource = {
        张紧系统上段张紧: ['2DT闭锁', '传感器差值', '传感器异常信号', '保护电磁阀状态', '压力1采集值', '压力2采集值', '复位', '屏蔽传感器1',
            '屏蔽传感器1状态', '屏蔽传感器2', '屏蔽传感器2状态', '张紧压力+5%状态', '张紧压力+5%采集值', '张紧压力+10%状态',
            '张紧压力+10%采集值', '张紧压力-5%状态', '张紧压力-5%采集值', '张紧压力-10%状态', '张紧压力-10%采集值', '张紧压力正常信号',
            '张紧小车超限', '张紧百分比1', '张紧百分比2', '张紧额定压力', '泄压电磁阀状态', '电机状态', '风机状态'],
        张紧系统下段张紧: ['2DT闭锁', '传感器差值', '传感器异常信号', '保护电磁阀状态', '压力1采集值', '压力2采集值', '复位', '屏蔽传感器1',
            '屏蔽传感器1状态', '屏蔽传感器2', '屏蔽传感器2状态', '张紧压力+5%状态', '张紧压力+5%采集值', '张紧压力+10%状态',
            '张紧压力+10%采集值', '张紧压力-5%状态', '张紧压力-5%采集值', '张紧压力-10%状态', '张紧压力-10%采集值', '张紧压力正常信号',
            '张紧小车超限', '张紧百分比1', '张紧百分比2', '张紧额定压力', '泄压电磁阀状态', '电机状态', '电机状态'],
    };

    constructor(public mqttService: MqttService) {
    }

    ngOnInit() {
    }

}
