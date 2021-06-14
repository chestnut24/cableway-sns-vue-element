import {Component, OnInit} from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';
import {SpeedEchartsComponent} from "../speed-echarts/speed-echarts.component";
import {NzModalService} from "ng-zorro-antd";

@Component({
    selector: 'app-speed-elect-mid-station',
    templateUrl: './speed-elect-mid-station.component.html',
    styleUrls: ['./speed-elect-mid-station.component.scss']
})
export class SpeedElectMidStationComponent implements OnInit {

    statusList = [['手动', '低速', '高速1', '高速2'], ['风机运行', '主回路投入', '允许运行'], ['零速', '超速'], ['整流电源异常', '整流柜故障']];

    statusListCmp = ['', '(0.5m/s)', '(3m/s)', '(6m/s)'];

    tilList = ['1#主电机', '2#主电机'];
    speedElectList = ['运行速度', '运行电流'];
    unitList = ['m/s', 'A'];
    tempList = ['绕组1温度', '绕组2温度', '绕组3温度', '前轴承温度', '后轴承温度'];
    motorTem1 = ['3#主电机', '4#主电机', '5#主电机', '6#主电机', '7#主电机'];
    motorTem2 = ['4#主电机', '5#主电机', '6#主电机', '7#主电机', '8#主电机'];

    dataLength = 0;
    motorList = ['中站1#主电机', '中站2#主电机', '中站3#主电机', '中站4#主电机', '中站5#主电机', '中站6#主电机', '中站7#主电机', '中站8#主电机'];
    motorDataList = [];

    // case1: ;


    get openSignalData() {
        return this.mqttService.dataDictionary['中站开闸信号'] ? this.mqttService.dataDictionary['中站开闸信号'] : {};
    }

    get runStateData() {
        return this.mqttService.dataDictionary['中站运行状态'] ? this.mqttService.dataDictionary['中站运行状态'] : {};
    }

    get motorData() {
        for (let i = 0; i < 8; i++) {
            this.motorDataList[i] = this.mqttService.dataDictionary[this.motorList[i]] ? this.mqttService.dataDictionary[this.motorList[i]] : {};
        }
        return this.motorDataList;
    }

    constructor(
        public modalService: NzModalService,
        public mqttService: MqttService
    ) {
    }

    ngOnInit() {
    }

    showModal(chartPosition, chartMotorPosition, chartType): void {
        // this.isVisible = true;
        const modal = this.modalService.create({
            nzFooter: null,
            nzWidth: 800,
            nzComponentParams: {
                position: chartPosition,
                motorPosition: chartMotorPosition,
                type: chartType,
            },
            nzContent: SpeedEchartsComponent,
        });
    }

    judgePoint(item, state): string { // 根据输入点位返回相应颜色
        if (item === '零速' || item === '主回路投入' || item === '允许运行') { // false时显示为红色的：零速、主回路投入、允许运行
          if (state) {
            return '#6ABE04';
          } else {
            return '#FF365F';
          }
        } else if (item === '风机运行' || item === '整流电源异常' || item === '超速' || item === '整流柜故障') { // false时显示为绿色的：风机运行、整流电源异常、超速、整流柜故障
          if (state) {
            return '#FF365F';
          } else {
            return '#6ABE04';
          }
        } else if (item === '手动' || item === '低速' || item === '高速1' || item === '高速2') { // false时显示为无状态的：手动、低速、高速1、高速2 true为绿色
          if (state) {
            return '#6ABE04';
          } else {
            return null;
          }
        }
    }

}
