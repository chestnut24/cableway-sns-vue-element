import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SupportWindService} from '../../../services/support-wind.service';

@Component({
    selector: 'app-wind-echarts',
    templateUrl: './wind-echarts.component.html',
    styleUrls: ['./wind-echarts.component.scss']
})
export class WindEchartsComponent implements OnInit, OnDestroy {

    @Input() tabName;
    windData;
    myChart: echarts.ECharts; // 折线图
    date = []; // 时间数组
    data = []; // 数据数组
    now; // 时间转化中间变量
    // refreshTimeNormal = 3000; // 正常刷新时间
    // refreshTimeAlarm = 1000; // 报警信号刷新时间
    lastData; // 最后一个数据，用来判断刷新时间
    alarmValue = 13.9; // 警报值，超过此值一秒一刷
    initChartTimer; // 定时器 更新图表
    chartOption = { // chart的option参数
        grid: {
            // top: 40,  // 距离容器上边界40像素
            // bottom: 80   // 距离容器下边界30像素
            x: 100,
            y: 10,
            x1: 50,
            y2: 70,
        },
        xAxis: { // x轴设置
            type: 'category',
            boundaryGap: false,
            splitLine: {show: true}, // 去除网格线
            data: this.date,
            // splitNumber: 24, // 横坐标设置24个间隔
            // axis
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
                start: 90, // 起始0
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
                name: '风速',
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
                    data: [
                        {
                            name: '13.9m/s警戒线',
                            // type: 'average',
                            lineStyle: {
                                color: '#FF365F'
                            },
                            // yAxis: {
                            //   data: ['13.9'],
                            // },
                            yAxis: 13.9,
                        }
                    ],
                },
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    constructor(public windSupport: SupportWindService) {
    }

    ngOnInit() {
        this.initChart();
        this.getData();
        this.updateChart();
        // this.updateData();
    }
    ngOnDestroy(): void {
        clearInterval(this.initChartTimer);
    }

    initChart() { // 初始化图表
        // @ts-ignore
        this.myChart = echarts.init(document.getElementById('wind-echarts')); // 初始化图表
        // @ts-ignore
        this.myChart.showLoading();
        // @ts-ignore
        this.myChart.setOption(this.chartOption);
    }

    getData() {
        this.windSupport.getWindData(this.tabName).subscribe((winSupport) => {
            this.windData = winSupport.data;
            for (let i = 0; i < winSupport.data.length; i++) {
                this.data[i] = winSupport.data[i].v;
                this.now = new Date(winSupport.data[i].time);
                this.now = this.now.toLocaleDateString() + '\n' + this.now.getHours() + this.now.toLocaleTimeString().substr(-6, 6);
                this.date[i] = this.now;
                // console.log('this.data' + this.data[i]);
            }
            this.lastData = this.data[this.data.length - 1];
            // console.log(winSupport.data.length);
            this.myChart.hideLoading();

            // console.log('lastData' + this.lastData);
            // console.log('数据更新');
            // this.updateData();
        });
    }

    updateChart() { // 定时刷新chart
        this.initChartTimer = setInterval(() => { // 自动更新数据内容
            this.myChart.setOption({
                xAxis: {
                    data: this.date,
                },
                series: [{
                    type: 'line',
                    name: '风速',
                    data: this.data
                }]
            });
        }, 1000);
    }

    updateData() {
        // console.log('lastData' + this.lastData);
        if (this.lastData < this.alarmValue) {
            setTimeout(() => {
                this.getData();
            }, 60000);
        } else {
            setTimeout(() => {
                this.getData();
            }, 1000);
        }
    }
}
