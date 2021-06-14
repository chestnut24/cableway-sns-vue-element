import {Component, OnInit} from '@angular/core';
import {MqttService} from '../../services/mqtt.service';
import {log} from "ng-zorro-antd";
import {getLocaleFirstDayOfWeek} from "@angular/common";

@Component({
    selector: 'app-support-wind',
    templateUrl: './support-wind.component.html',
    styleUrls: ['./support-wind.component.scss']
})
export class SupportWindComponent implements OnInit {

    // 1红色，0绿色 false是0
    setTime = 1;
    nowDate; // 当前日期
    data = [];
    tabList = [
        {
            name: '上段18号支架',
            path: './'
        },
        {
            name: '上段27号支架',
            path: './top27'
        },
        {
            name: '下段13号支架',
            path: './bottom13'
        },
        {
            name: '下段17号支架',
            path: './bottom17'
        },
    ];
    titleArr = ['上段支架脱索信号', '下段支架脱索信号'];
    dataSource = {
        上段支架脱索信号: [
            '线路支架1#脱索', '线路支架2#脱索', '线路支架3#脱索', '线路支架4#脱索', '线路支架5#脱索', '线路支架6#脱索',
            '线路支架7#脱索', '线路支架8#脱索', '线路支架9#脱索', '线路支架10#脱索', '线路支架11#脱索', '线路支架12#脱索',
            '线路支架13#脱索', '线路支架14#脱索', '线路支架15#脱索', '线路支架16#脱索', '线路支架17#脱索', '线路支架18#脱索',
            '线路支架19#脱索', '线路支架20#脱索', '线路支架21#脱索', '线路支架22#脱索', '线路支架23#脱索', '线路支架24#脱索',
            '线路支架25#脱索', '线路支架26#脱索', '线路支架27#脱索'
        ],
        下段支架脱索信号: [
            '线路支架1#脱索', '线路支架2#脱索', '线路支架3#脱索', '线路支架4#脱索', '线路支架5#脱索', '线路支架6#脱索',
            '线路支架7#脱索', '线路支架8#脱索', '线路支架9#脱索', '线路支架10#脱索', '线路支架11#脱索', '线路支架12#脱索',
            '线路支架13#脱索', '线路支架14#脱索', '线路支架15#脱索', '线路支架16#脱索', '线路支架17#脱索', '线路支架18#脱索',
            '线路支架19#脱索'
        ],
        风向和风速: [
            '上段18号支架风速', '上段27号支架风速', '上段13号支架风速', '上段17号支架风速',
        ],
    };

    get dataList() {
        for (let i = 0; i < 2; i++) {
            this.data[i] = this.mqttService.dataDictionary[this.titleArr[i]] ? this.mqttService.dataDictionary[this.titleArr[i]] : {};
        }
        return this.data;
    }
    constructor(public mqttService: MqttService) {
    }

    ngOnInit() {
        this.nowDate = new Date().toLocaleDateString();
        // if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
        //     for (let i = 0; i < 2; i++) {
        //         this.data[i] = this.mqttService.dataDictionary[this.titleArr[i]];
        //     }
        // }
        // setInterval( () => {
        //     this.setTime++;
        // }, 300);
    }

}
