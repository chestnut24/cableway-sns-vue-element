import { Component, OnInit } from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
  selector: 'app-mid-station-temperature',
  templateUrl: './mid-station-temperature.component.html',
  styleUrls: ['./mid-station-temperature.component.scss']
})
export class MidStationTemperatureComponent implements OnInit {
  flow = true;
  pump = true;
  fan = true;
  speedTemp = null;
  speedHeight = '0';
  MainMonitor1 = {
    frontAxleTemp: null, // 前轴温度
    frontHeight: '0', // 前轴温度轴高度
    frontExist: false, // 前轴是否显示
    backAxleTemp: null, // 后轴温度
    backHeight: '0', // 后轴温度轴高度
    backExist: false, // 后轴是否展示
    winding1Temp: null, // 绕组1温度
    winding1Height: '0', // 绕组1温度轴高度
    winding1Exist: false, // 绕组1是否显示
    winding2Temp: null, // 绕组2温度
    winding2Height: '0', // 绕组2温度轴高度
    winding2Exist: false, // 绕组2是否显示
    winding3Temp: null, // 绕组3温度
    winding3Height: '0', // 绕组3温度轴是否显示
    winding3Exist: false, // 绕组3是否显示
  };
  MainMonitor2 = {
    frontAxleTemp: null, // 前轴温度
    frontHeight: '0', // 前轴温度轴高度
    frontExist: false, // 前轴是否显示
    backAxleTemp: null, // 后轴温度
    backHeight: '0', // 后轴温度轴高度
    backExist: false, // 后轴是否展示
    winding1Temp: null, // 绕组1温度
    winding1Height: '0', // 绕组1温度轴高度
    winding1Exist: false, // 绕组1是否显示
    winding2Temp: null, // 绕组2温度
    winding2Height: '0', // 绕组2温度轴高度
    winding2Exist: false, // 绕组2是否显示
    winding3Temp: null, // 绕组3温度
    winding3Height: '0', // 绕组3温度轴是否显示
    winding3Exist: false, // 绕组3是否显示
  };
  MainMonitor3 = {
    frontAxleTemp: null, // 前轴温度
    frontHeight: '0', // 前轴温度轴高度
    frontExist: false, // 前轴是否显示
    backAxleTemp: null, // 后轴温度
    backHeight: '0', // 后轴温度轴高度
    backExist: false, // 后轴是否展示
    winding1Temp: null, // 绕组1温度
    winding1Height: '0', // 绕组1温度轴高度
    winding1Exist: false, // 绕组1是否显示
    winding2Temp: null, // 绕组2温度
    winding2Height: '0', // 绕组2温度轴高度
    winding2Exist: false, // 绕组2是否显示
    winding3Temp: null, // 绕组3温度
    winding3Height: '0', // 绕组3温度轴是否显示
    winding3Exist: false, // 绕组3是否显示
  };
  MainMonitor4 = {
    frontAxleTemp: null, // 前轴温度
    frontHeight: '0', // 前轴温度轴高度
    frontExist: false, // 前轴是否显示
    backAxleTemp: null, // 后轴温度
    backHeight: '0', // 后轴温度轴高度
    backExist: false, // 后轴是否展示
    winding1Temp: null, // 绕组1温度
    winding1Height: '0', // 绕组1温度轴高度
    winding1Exist: false, // 绕组1是否显示
    winding2Temp: null, // 绕组2温度
    winding2Height: '0', // 绕组2温度轴高度
    winding2Exist: false, // 绕组2是否显示
    winding3Temp: null, // 绕组3温度
    winding3Height: '0', // 绕组3温度轴是否显示
    winding3Exist: false, // 绕组3是否显示
  };
  get slowSpeed() {
    return this.mqttService.dataDictionary['中站减速机'] ? this.mqttService.dataDictionary['中站减速机'] : {};
  }
  get Monitor() {
    return this.mqttService.dataDictionary['中间站电机温度'] ? this.mqttService.dataDictionary['中间站电机温度'] : {};
  }

  constructor(
      public mqttService: MqttService,
  ) { }

  ngOnInit() {
    this.mqttService.dataChange.subscribe( () => {
      if (Object.keys(this.mqttService.dataDictionary).length !== 0) {
        this.flow = this.slowSpeed['流量状态'].value;
        this.pump = this.slowSpeed['油泵状态'].value;
        this.fan = this.slowSpeed['风机状态'].value;
        this.speedTemp = this.slowSpeed['减速机轴温'].value;
        this.speedHeight = (((this.speedTemp + 40) / 160) * 100).toString() + '%' ;
        console.log('test', this.mqttService.dataDictionary['中站1#主电机']);
        if (this.Monitor['1#主电机前轴温度']) {
          this.MainMonitor1.frontAxleTemp = this.Monitor['1#主电机前轴温度'].value;
          console.log('temp', this.MainMonitor1.frontAxleTemp);
          this.MainMonitor1.frontHeight = (((this.MainMonitor1.frontAxleTemp + 40) / 160) * 100).toString() + '%' ;
          console.log('height', this.MainMonitor1.frontHeight);
          this.MainMonitor1.frontExist = true;
        }
        if (this.Monitor['1#主电机后轴温度']) {
          this.MainMonitor1.backAxleTemp = this.Monitor['1#主电机后轴温度'].value;
          this.MainMonitor1.backHeight = (((this.MainMonitor1.backAxleTemp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor1.backExist = true;
        }
        if (this.Monitor['1#主电机绕组1温度']) {
          this.MainMonitor1.winding1Temp = this.Monitor['1#主电机绕组1温度'].value;
          this.MainMonitor1.winding1Height = (((this.MainMonitor1.winding1Temp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor1.winding1Exist = true;
        }
        if (this.Monitor['1#主电机绕组2温度']) {
          this.MainMonitor1.winding2Temp = this.Monitor['1#主电机绕组2温度'].value;
          this.MainMonitor1.winding2Height = (((this.MainMonitor1.winding2Temp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor1.winding2Exist = true;
        }
        if (this.Monitor['1#主电机绕组3温度']) {
          this.MainMonitor1.winding3Temp = this.Monitor['1#主电机绕组3温度'].value;
          this.MainMonitor1.winding3Height = (((this.MainMonitor1.winding3Temp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor1.winding3Exist = true;
        }
        if (this.Monitor['2#主电机前轴温度']) {
          this.MainMonitor2.frontAxleTemp = this.Monitor['2#主电机前轴温度'].value;
          this.MainMonitor2.frontHeight = (((this.MainMonitor2.frontAxleTemp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor2.frontExist = true;
        }
        if (this.Monitor['2#主电机后轴温度']) {
          this.MainMonitor2.backAxleTemp = this.Monitor['2#主电机后轴温度'].value;
          this.MainMonitor2.backHeight = (((this.MainMonitor2.backAxleTemp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor2.backExist = true;
        }
        if (this.Monitor['2#主电机绕组1温度']) {
          this.MainMonitor2.winding1Temp = this.Monitor['2#主电机绕组1温度'].value;
          this.MainMonitor2.winding1Height = (((this.MainMonitor2.winding1Temp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor2.winding1Exist = true;
        }
        if (this.Monitor['2#主电机绕组2温度']) {
          this.MainMonitor2.winding2Temp = this.Monitor['2#主电机绕组2温度'].value;
          this.MainMonitor2.winding2Height = (((this.MainMonitor2.winding2Temp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor2.winding2Exist = true;
        }
        if (this.Monitor['2#主电机绕组3温度']) {
          this.MainMonitor2.winding3Temp = this.Monitor['2#主电机绕组3温度'].value;
          this.MainMonitor2.winding3Height = (((this.MainMonitor2.winding3Temp + 40) / 160) * 100).toString() + '%' ;
          this.MainMonitor2.winding3Exist = true;
        }
      }
    });
  }
}
