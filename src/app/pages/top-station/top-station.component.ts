import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {MqttService} from '../../services/mqtt.service';

@Component({
  selector: 'app-top-station',
  templateUrl: './top-station.component.html',
  styleUrls: ['./top-station.component.scss']
})
export class TopStationComponent implements OnInit {
  dataSource = {
    上站紧急停车: ['控制台紧急停车', '手动泄压急停', '进站侧拉绳开关', '出站侧拉绳开关', '进站口紧急停车', '出站口紧急停车', '抱索器进站侧脱开后',
      '抱索器出站侧脱开后', '运行中主辅机异动', '整流电源异常', '主回路异常', '按钮盒急停', '出站侧抱索器形位', '主机和从机电流差值过大', '联动中中间站与上站通讯异常'],
    上站正常停车: ['上站控制台正常停车', '上站限速保护正常停车', '总旁路时间到正常停车', '低速闸松开后5秒未运行'],
    上站报警不停车: ['风速超限速自动降速', '与中间站通讯异常', '出站侧开关门开关异常', '进站侧开关门开关异常', '区域开关1异常（入口区域开关异常）',
      '区域开关15异常（出口区域开关异常）', '辅机运行时减速机流量异常', '抱索力低报警', '高速轮异常', '低速轮异常'],
    上站安全停车: ['控制台按钮停车', '站口按钮安全停车', '高速闸动作异常', '低速闸动作异常', '单闸测试异常',
      '开车后溜车', '主辅联锁异常', '接地棒异常', '计数脉冲异常', '运行中模式转换',
      '减速机输出轴温度过高（80℃）', '减速机润滑油流量异常', '出站侧挂结前异常', '出站钢绳垂直位1异常', '出站钢绳垂直位2异常',
      '出站侧水平绳位异常', '正向出站关门异常', '出站侧钢丝绳+10%', '出站侧钢丝绳-10%', '出站限制门异常',
      '出站侧抱索力异常', '正向出站侧力起异常', '正向出站侧力止异常', '抱索力标定未恢复', '电机绕组过热停车',
      '上段支架脱索', '运行中道岔异动', '进站侧抱索器形状', '进站侧挂接前异常', '进站钢绳垂直位1异常',
      '进站钢绳垂直位2异常', '进站侧水平绳位异常', '反向出站关门异常', '防断轴检测异常', '轴承防抱死异常',
      '进站侧抱索力异常', '反向出站侧力起异常', '反向出站侧力止异常', '速度异常', '旁路或故障超限速', '超速10%', '道岔异常',
      '升降平台位置异常', '相邻区域有车', '区域1检测异常', '区域2检测异常', '区域3检测异常',
      '区域4检测异常', '区域5检测异常', '区域6检测异常', '区域7检测异常',  '区域8检测异常',
      '区域9检测异常', '区域10检测异常', '区域11检测异常', '区域12检测异常', '区域13检测异常', '区域14检测异常']
  };
  titleArr = ['上站紧急停车', '上站正常停车', '上站报警不停车', '上站安全停车'];
  constructor(public mqttService: MqttService) { }

  ngOnInit() {
  }

}
