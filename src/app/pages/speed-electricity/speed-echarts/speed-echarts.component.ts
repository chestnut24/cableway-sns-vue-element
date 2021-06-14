import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SupportWindService} from '../../../services/support-wind.service';
import {SpeedElectricityService} from '../../../services/speed-electricity.service';

@Component({
  selector: 'app-speed-echarts',
  templateUrl: './speed-echarts.component.html',
  styleUrls: ['./speed-echarts.component.scss']
})
export class SpeedEchartsComponent implements OnInit, OnDestroy {
  @Input() position; // 上站还是下站
  @Input() motorPosition; // 上站1还是下站2电机
  @Input() type; // 运行速度还是电流
  speedData;
  myChart: echarts.ECharts; // 折线图
  date = []; // 时间数组
  data = []; // 数据数组
  nowDate; // 当前日期
  now; // 时间转化中间变量
  lastData; // 最后一个数据，用来判断刷新时间
  initChartParamsTimer; // 定时器 初始化图表参数
  initChartTimer; // 定时器 更新图表

  // 根据速度还是电流进行表格的更改
  chartColor; // 表格的背景颜色 #036672 或者 #5184F7
  upperLimit; // 警戒线上限
  lowerLimit; // 警戒线下限
  yAxisUnits; // y轴单位
  chartOption = { // chart的option参数
    grid: {
      x: 70,
      y: 40,
      x1: 20,
      y2: 80,
    },
    xAxis: { // x轴设置
      type: 'category',
      boundaryGap: false,
      splitLine: {show: true}, // 去除网格线
      data: this.date,
    },
    yAxis: { // y轴设置
      boundaryGap: [0, '50%'],
      splitLine: {show: false}, // 去除网格线
      name: '(m/s)',
      type: 'value',
      axisLabel: {
        // formatter: '{value} (m/s)'       // 给Y轴上的刻度加上单位
      },
    },
    dataZoom: [ // 数据滑块设置
      {
        type: 'slider', // 数据滑块
        start: 95, // 起始0
        end: 100, // 终止100
        minSpan: 8,
        bottom: '0%',
        dataBackground: {
          lineStyle: {
            color: '#F0F2F5'
          },
          areaStyle: {
            color: '#F0F2F5',
            opacity: 1,
          }
        },
        // fillerColor:'rgba(255,255,255,.6)'
      },
      // {
      //     type: 'inside'// 使鼠标在图表中时滚轮可用
      // }
    ],
    series: [ // 曲线设置
      {
        type: 'line',
        data: this.data,
        name: '速度电流',
        // smooth: true,
        symbol: 'circle', // 空心小圆设置 ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        stack: 'a',
        areaStyle: { // 区域设置
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#5184F7' // 100% 处的颜色
            }, {
              offset: 1, color: '#ffffff'  // 0% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
        itemStyle: { // 曲线设置
          normal: {
            color: '#5184F7', // 圆心圈颜色
            lineStyle: {
              color: '#5184F7'
            }
          }
        },
        markLine: { // 警戒线
          symbol: 'none',
          label: 'middle', // 将警示值放在哪个位置，三个值“start”,"middle","end"  开始
          layoutAnimation: false,
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  constructor(public windSupport: SupportWindService, public  speedElectricity: SpeedElectricityService) { }

  ngOnInit() {
    this.initChart();
    this.initChartParams();
    this.getData();
    this.updateChart();
  }
  ngOnDestroy(): void {
    clearInterval(this.initChartParamsTimer);
    clearInterval(this.initChartTimer);
  }

  initChartParams() {
    if (this.type === '速度') {
      this.upperLimit = 6.6;
      this.yAxisUnits = 'm/s';
    }  else if (this.type === '电流' && this.position === '上站主电机') {
      this.upperLimit = 1455;
      this.yAxisUnits = 'A';
    } else if (this.type === '电流' && this.position === '中站主电机') {
      this.upperLimit = 1996;
      this.yAxisUnits = 'A';
    }
    // this.lowerLimit = -6.6;
    // this.chartColor = '#5184F7';
    this.initChartParamsTimer = setInterval(() => {
      this.myChart.setOption({
        yAxis: { // y轴设置
          name: this.yAxisUnits,
        },
        series: [{
          name: '速度电流',
          areaStyle: {
            // color: {
            //   type: 'linear',
            //   x: 0,
            //   y: 0,
            //   x2: 0,
            //   y2: 1,
            //   colorStops: [{
            //     offset: 0, color: '#5184F7' // 100% 处的颜色
            //   }, {
            //     offset: 1, color: '#ffffff'  // 0% 处的颜色
            //   }],
            //   global: false // 缺省为 false
            // },
          },
          // itemStyle: { // 曲线设置
          //   normal: {
          //     color: this.chartColor, // 圆心圈颜色
          //     lineStyle: {
          //       color: this.chartColor
          //     }
          //   }
          // },
          markLine: { // 警戒线
            data: [
              {
                name: '正警戒线',
                lineStyle: {
                  color: '#FF365F'
                },
                yAxis: this.upperLimit,
              },
              {
                name: '负警戒线',
                lineStyle: {
                  color: '#FF365F'
                },
                yAxis: -this.upperLimit,
              },
            ],
          },
        }],
      });
    }, 1000);
  }

  initChart() { // 初始化图表
    this.nowDate = new Date().toLocaleDateString();
    setTimeout(() => {
      // @ts-ignore
      this.myChart = echarts.init(document.getElementById('speed-echarts')); // 初始化图表
      // @ts-ignore
      // this.myChart.showLoading();
      // @ts-ignore
      this.myChart.setOption(this.chartOption);
    }, 100);
  }

  getData() {
    this.speedElectricity.getData(this.position, this.motorPosition, this.type).subscribe((speedElectricity) => {
      this.speedData = speedElectricity.data;
      for (let i = 0; i < speedElectricity.data.length; i++) {
        this.data[i] = speedElectricity.data[i].v;
        this.now = new Date(speedElectricity.data[i].time);
        this.now = this.now.toLocaleDateString() + '\n' + this.now.getHours() + this.now.toLocaleTimeString().substr(-6, 6);
        this.date[i] = this.now;
        // console.log('this.data' + this.data[i]);
      }
      this.lastData = this.data[this.data.length - 1];
      // console.log(winSupport.data.length);
      // this.myChart.hideLoading();

      // console.log('lastData' + this.lastData);
      // console.log('数据更新');
      // this.updateData();
    });
  }

  updateChart() {
    this.initChartTimer = setInterval(() => { // 自动更新数据内容
      this.myChart.setOption({
        xAxis: {
          data: this.date,
        },
        series: [{
          type: 'line',
          name: '速度电流',
          data: this.data
        }]
      });
    }, 1000);
  }

}
