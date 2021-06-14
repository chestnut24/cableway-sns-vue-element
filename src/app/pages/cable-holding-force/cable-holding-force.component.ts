import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../services/mqtt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cable-holding-force',
  templateUrl: './cable-holding-force.component.html',
  styleUrls: ['./cable-holding-force.component.scss']
})
export class CableHoldingForceComponent implements OnInit {
  titleArr = ['上站', '下站' , '中间站上行' , '中间站下行'];
  dataSource = {
    上站: [
        '反向出站/进站侧抱索力',
        '反向出站/进站侧抱索力-侧栏1', '反向出站/进站侧抱索力-侧栏报警1',
        '反向出站/进站侧抱索力-侧栏2', '反向出站/进站侧抱索力-侧栏报警2',
        '反向出站/进站侧抱索力-侧栏3', '反向出站/进站侧抱索力-侧栏报警3',
        '反向出站/进站侧抱索力-侧栏4', '反向出站/进站侧抱索力-侧栏报警4',
        '反向出站/进站侧抱索力-侧栏5', '反向出站/进站侧抱索力-侧栏报警5',
        '正向出站/进站侧抱索力',
        '正向出站/进站侧抱索力-侧栏1', '正向出站/进站侧抱索力-侧栏报警1',
        '正向出站/进站侧抱索力-侧栏2', '正向出站/进站侧抱索力-侧栏报警2',
        '正向出站/进站侧抱索力-侧栏3', '正向出站/进站侧抱索力-侧栏报警3',
        '正向出站/进站侧抱索力-侧栏4', '正向出站/进站侧抱索力-侧栏报警4',
        '正向出站/进站侧抱索力-侧栏5', '正向出站/进站侧抱索力-侧栏报警5',
    ],
    下站: [
        '反向出站/进站侧抱索力',
        '反向出站/进站侧抱索力-侧栏1', '反向出站/进站侧抱索力-侧栏报警1',
        '反向出站/进站侧抱索力-侧栏2', '反向出站/进站侧抱索力-侧栏报警2',
        '反向出站/进站侧抱索力-侧栏3', '反向出站/进站侧抱索力-侧栏报警3',
        '反向出站/进站侧抱索力-侧栏4', '反向出站/进站侧抱索力-侧栏报警4',
        '反向出站/进站侧抱索力-侧栏5', '反向出站/进站侧抱索力-侧栏报警5',
        '正向出站/进站侧抱索力',
        '正向出站/进站侧抱索力-侧栏1', '正向出站/进站侧抱索力-侧栏报警1',
        '正向出站/进站侧抱索力-侧栏2', '正向出站/进站侧抱索力-侧栏报警2',
        '正向出站/进站侧抱索力-侧栏3', '正向出站/进站侧抱索力-侧栏报警3',
        '正向出站/进站侧抱索力-侧栏4', '正向出站/进站侧抱索力-侧栏报警4',
        '正向出站/进站侧抱索力-侧栏5', '正向出站/进站侧抱索力-侧栏报警5',
    ],
    中间站上行: [
        '反向出站/进站侧抱索力',
        '反向出站/进站侧抱索力-侧栏1', '反向出站/进站侧抱索力-侧栏报警1',
        '反向出站/进站侧抱索力-侧栏2', '反向出站/进站侧抱索力-侧栏报警2',
        '反向出站/进站侧抱索力-侧栏3', '反向出站/进站侧抱索力-侧栏报警3',
        '反向出站/进站侧抱索力-侧栏4', '反向出站/进站侧抱索力-侧栏报警4',
        '反向出站/进站侧抱索力-侧栏5', '反向出站/进站侧抱索力-侧栏报警5',
        '正向出站/进站侧抱索力',
        '正向出站/进站侧抱索力-侧栏1', '正向出站/进站侧抱索力-侧栏报警1',
        '正向出站/进站侧抱索力-侧栏2', '正向出站/进站侧抱索力-侧栏报警2',
        '正向出站/进站侧抱索力-侧栏3', '正向出站/进站侧抱索力-侧栏报警3',
        '正向出站/进站侧抱索力-侧栏4', '正向出站/进站侧抱索力-侧栏报警4',
        '正向出站/进站侧抱索力-侧栏5', '正向出站/进站侧抱索力-侧栏报警5',
    ],
    中间站下行: [
        '反向出站/进站侧抱索力',
        '反向出站/进站侧抱索力-侧栏1', '反向出站/进站侧抱索力-侧栏报警1',
        '反向出站/进站侧抱索力-侧栏2', '反向出站/进站侧抱索力-侧栏报警2',
        '反向出站/进站侧抱索力-侧栏3', '反向出站/进站侧抱索力-侧栏报警3',
        '反向出站/进站侧抱索力-侧栏4', '反向出站/进站侧抱索力-侧栏报警4',
        '反向出站/进站侧抱索力-侧栏5', '反向出站/进站侧抱索力-侧栏报警5',
        '正向出站/进站侧抱索力',
        '正向出站/进站侧抱索力-侧栏1', '正向出站/进站侧抱索力-侧栏报警1',
        '正向出站/进站侧抱索力-侧栏2', '正向出站/进站侧抱索力-侧栏报警2',
        '正向出站/进站侧抱索力-侧栏3', '正向出站/进站侧抱索力-侧栏报警3',
        '正向出站/进站侧抱索力-侧栏4', '正向出站/进站侧抱索力-侧栏报警4',
        '正向出站/进站侧抱索力-侧栏5', '正向出站/进站侧抱索力-侧栏报警5',
    ],
  };
  reverseStationWarning = {
      上站: [],
      下站: [],
      中间站上行: [],
      中间站下行: [],

  };
  directStationWarning = {
      上站: [],
      下站: [],
      中间站上行: [],
      中间站下行: [],
  };
  reverseStationTemp = {
      上站: '',
      下站: '',
      中间站上行: '',
      中间站下行: ''
  }
    directStationTemp = {
        上站: '',
        下站: '',
        中间站上行: '',
        中间站下行: ''
    }
  StationList = []
  constructor(
      public mqttService: MqttService,
      public router: Router
  ) { }
  get Station() {
      for (let i = 0; i < 4; i ++) {
          this.StationList[i] = this.mqttService.dataDictionary[this.titleArr[i]] ?  this.mqttService.dataDictionary[this.titleArr[i]] : {};
      }
      return this.StationList;
  }
  // get downStation() {
  //     return this.mqttService.dataDictionary['下站'] ?  this.mqttService.dataDictionary['下站'] : {};
  // }
  // get midStationUp() {
  //     return this.mqttService.dataDictionary['中间站上行'] ?  this.mqttService.dataDictionary['中间站上行'] : {};
  // }
  //   get midStationDown() {
  //       return this.mqttService.dataDictionary['中间站下行'] ?  this.mqttService.dataDictionary['中间站下行'] : {};
  //   }

  ngOnInit() {
      this.mqttService.dataChange.subscribe( () => {
          if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
              this.reverseStationTemp.上站 = (((this.Station[0]['反向出站/进站侧抱索力'].value) / 2200) * 100).toString() + '%';
              this.reverseStationTemp.下站 = (((this.Station[1]['反向出站/进站侧抱索力'].value) / 2200) * 100).toString() + '%';
              this.reverseStationTemp.中间站上行 = (((this.Station[2]['反向出站/进站侧抱索力'].value) / 2200) * 100).toString() + '%';
              this.reverseStationTemp.中间站下行 = (((this.Station[3]['反向出站/进站侧抱索力'].value) / 2200) * 100).toString() + '%';
              this.directStationTemp.上站 = (((this.Station[0]['正向出站/进站侧抱索力'].value) / 2200) * 100).toString() + '%';
              this.directStationTemp.下站 = (((this.Station[1]['正向出站/进站侧抱索力'].value) / 2200) * 100).toString() + '%';
              this.directStationTemp.中间站上行 = (((this.Station[2]['正向出站/进站侧抱索力'].value) / 2200) * 100).toString() + '%';
              this.directStationTemp.中间站下行 = (((this.Station[3]['正向出站/进站侧抱索力'].value) / 2200) * 100).toString() + '%';
          }
          for (let i = 1, k = 0 , j = 2; i <= 9 ; k++) {
              if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
                  this.reverseStationWarning.上站[k] = {
                      data: this.Station[0][this.dataSource.上站[i]].value,
                      warning:  this.Station[0][this.dataSource.上站[j]].value,
                  };
                  this.reverseStationWarning.下站[k] = {
                      data: this.Station[1][this.dataSource.上站[i]].value,
                      warning:  this.Station[1][this.dataSource.上站[j]].value
                  };
                  this.reverseStationWarning.中间站上行[k] = {
                      data: this.Station[2][this.dataSource.上站[i]].value,
                      warning:  this.Station[2][this.dataSource.上站[j]].value
                  };
                  this.reverseStationWarning.中间站下行[k] = {
                      data: this.Station[3][this.dataSource.上站[i]].value,
                      warning:  this.Station[3][this.dataSource.上站[j]].value
                  };
              }
              i += 2;
              j += 2;
          }
          for (let i = 12, k = 0 , j = 13; i <= 20 ; k++) {
              if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
                  this.directStationWarning.上站[k] = {
                      data: this.Station[0][this.dataSource.上站[i]].value,
                      warning:  this.Station[0][this.dataSource.上站[j]].value
                  };
                  this.directStationWarning.下站[k] = {
                      data: this.Station[1][this.dataSource.上站[i]].value,
                      warning:  this.Station[1][this.dataSource.上站[j]].value
                  };
                  this.directStationWarning.中间站上行[k] = {
                      data: this.Station[2][this.dataSource.上站[i]].value,
                      warning:  this.Station[2][this.dataSource.上站[j]].value
                  };
                  this.directStationWarning.中间站下行[k] = {
                      data: this.Station[3][this.dataSource.上站[i]].value,
                      warning:  this.Station[3][this.dataSource.上站[j]].value
                  };
              }
              i += 2;
              j += 2;
          }
      })
      console.log('direct', this.directStationWarning.上站);
      console.log('reverse', this.reverseStationWarning.上站);
  }
    goHistory() {
      this.router.navigate(['/cableHoldingHistory']);
    }

}
