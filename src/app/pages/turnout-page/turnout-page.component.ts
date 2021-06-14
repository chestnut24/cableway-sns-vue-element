import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../services/mqtt.service';

@Component({
  selector: 'app-turnout-page',
  templateUrl: './turnout-page.component.html',
  styleUrls: ['./turnout-page.component.scss']
})
export class TurnoutPageComponent implements OnInit {
  // 一级标题
  titleArr = ['上站道岔', '下站道岔', '中间站道岔',  '中间站道岔'];
  stationImg = ['../../../assets/images/turnout/top-station.png',
                '../../../assets/images/turnout/bottom-station.png',
                '../../../assets/images/turnout/middle-top.png',
                '../../../assets/images/turnout/middle-bottom.png'];
  titleArrCmp = ['', '', '上行',  '下行'];
  secondTitleArr = ['运行道岔', '出/入库(检修)道岔', '平台'];
  thirdTitleArr = [['到位', '离位', '位置异常'], ['上升到位', '下降到位', '位置异常']];
  secondTitleStatusList = [['运行道岔-到位', '运行道岔-离位', '运行道岔-位置异常'],
    ['出/入库检修道岔-到位', '出/入库检修道岔-离位', '出/入库检修道岔-位置异常'],
    ['平台-到位', '平台-离位', '平台-位置异常'], ['运行道岔-位置异常1', '运行道岔-位置异常2']];
  midSecondTitleStatusList = [[['上行运行道岔-到位', '上行运行道岔-离位', '上行运行道岔-位置异常'],
    ['上行出/入库检修道岔-到位', '上行出/入库检修道岔-离位', '上行出/入库检修道岔-位置异常'],
    ['上行平台-上升到位', '上行平台-下降到位', '上行平台-位置异常'], ['上行运行道岔-位置异常1', '上行运行道岔-位置异常2']],
    [['下行运行道岔-上升到位', '下行运行道岔-下降到位', '下行运行道岔-位置异常'],
    ['下行出/入库检修道岔-到位', '下行出/入库检修道岔-离位', '下行出/入库检修道岔-位置异常'],
    ['下行平台-上升到位', '下行平台-下降到位', '下行平台-位置异常'], ['下行运行道岔-位置异常1', '下行运行道岔-位置异常2']]];
  // 图标
  iconList = {
    "运行道岔": '../../../assets/images/turnout/turnout.png',
    "出/入库(检修)道岔":'../../../assets/images/turnout/repair.png',
    "平台":'../../../assets/images/turnout/station.png'
  };

  motorDataList = [];


  get dataSource() {
    for (let i = 0; i < 4; i++) {
      this.motorDataList[i] = this.mqttService.dataDictionary[this.titleArr[i]] ? this.mqttService.dataDictionary[this.titleArr[i]] : {};
    }
    return this.motorDataList;
  }
  value?: string;

  constructor(public mqttService: MqttService) { }

  ngOnInit() {
    // tslint:disable-next-line:triple-equals
  }

}
