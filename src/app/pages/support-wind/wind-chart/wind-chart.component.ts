import {Component, Input, OnInit} from '@angular/core';
import {MqttService} from '../../../services/mqtt.service';

@Component({
    selector: 'app-wind-chart',
    templateUrl: './wind-chart.component.html',
    styleUrls: ['./wind-chart.component.scss']
})
export class WindChartComponent implements OnInit {

    @Input() inputData;
    @Input() storageName;
    // @ts-ignore
    myChart: echarts.ECharts;
    date = []; // 时间数组
    data = []; // 数据数组 一定要有个数！ emmm好像也不一定
    // dateStorage; // 用来存储时间到sessionStorage
    // dataStorage; // 用来存储数据到sessionStorage
    dateName; // 时间存储名称
    dataName; // 数据存储名称
    queueLength = 10; // 队列长度
    refreshTimeNormal = 3000; // 正常刷新时间
    refreshTimeInit = 100; // 用于初始化时间，一秒一刷
    refreshTimeAlarm = 1000; // 报警信号刷新时间
    refreshTime = 0;
    alarmValue = 13.9; // 警报值，超过此值一秒一刷
    initTime = new Date(); // 获得当前时间
    // 此处是将时间戳改为正常Date格式时间
    now; // 将当前时间进行处理，减去前几分钟
    chartOption = { // chart的option参数
        grid: {
            // top: 40,  // 距离容器上边界40像素
            // bottom: 80   // 距离容器下边界30像素
            x: 100,
            y: 50,
            x1: 50,
            y2: 80,
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
                start: 0, // 起始0
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

    constructor(public mqttService: MqttService) {
    }

    ngOnInit() {
        // @ts-ignore
        this.dateName = this.storageName + 'Date';
        this.dataName = this.storageName + 'Data';
        // @ts-ignore
        this.myChart = echarts.init(document.getElementById('wind-chart')); // 初始化图标
        this.now = new Date(this.initTime.getTime() - this.queueLength * this.refreshTimeInit); // 当前时间减去前几分钟，以填充数据
        // 先对数组进行初始赋值
        this.initData();
        if (!sessionStorage.getItem(this.dataName)) {
        } else {
            this.date = JSON.parse(sessionStorage.getItem(this.dateName));
            this.data = JSON.parse(sessionStorage.getItem(this.dataName));
            // @ts-ignore
            this.myChart.setOption(this.chartOption);
            // @ts-ignore
            window.onresize = this.myChart.resize;
        }
        this.refreshTime = 100; // 先快速获取一次数据进行判断
        this.updateDate();
    }

    addData(shift) { // 新增数据
        // now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
        // 格式化时间，转为
        // now = now.toLocaleDateString() + ' ' + now.getHours() + now.toLocaleTimeString().substr(-6, 6);
        this.now = this.now.toLocaleDateString() + '\n' + this.now.getHours() + this.now.toLocaleTimeString().substr(-6, 6);
        this.date.push(this.now); // 填充横坐标数组 时间
        // this.data.push((Math.random() - 0.4) * 10 + this.data[this.data.length - 1]); // 填充纵坐标

        if (shift) {
            // this.dataCenter = (Math.random() - 0.4) * 10 + this.data[this.data.length - 1];
            // this.data.push(this.dataCenter); // 填充横坐标
            if (this.inputData > this.alarmValue) { // 判断是否超过警戒线，超过了则使用警报刷新时间（如一秒一刷），未超过则使用正常刷新时间
                this.refreshTime = this.refreshTimeAlarm;
            } else {
                this.refreshTime = this.refreshTimeNormal;
            }
            this.data.push(this.inputData);
            this.date.shift();
            this.data.shift(); // 删除第一项
            // 控制每次加多少一段时间
            this.storageData(); // 存入sessionStorage
            this.now = new Date(+new Date(this.now) + this.refreshTime);
            this.updateDate();
        } else {
            // this.data.push((Math.random() - 0.4) * 10 + this.data[this.data.length - 1]); // 填充纵坐标
            this.data.push(this.inputData); // 初始化填充纵坐标

            // 控制每次加多少一段时间
            this.now = new Date(+new Date(this.now) + this.refreshTimeInit);
        }
        // @ts-ignore
        this.myChart.setOption(this.chartOption);
    }

    initData() { // 初始化数据
        for (let i = 1; i < this.queueLength; i++) {
            this.addData(false);
        }
    }

    updateDate() { // 更新数据
        if (this.refreshTime < 3000) { // 报警
            setTimeout(() => { // 自动更新数据内容
                this.addData(true);
                // setTimeout(() => { // 设置延时，异步数据
                //     this.myChart.setOption({
                //         xAxis: {
                //             data: this.date,
                //         },
                //         series: [{
                //             type: 'line',
                //             name: '风速',
                //             data: this.data
                //         }]
                //     });
                // }, 500);
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
        } else { // 正常
            setTimeout(() => { // 自动更新数据内容
                this.addData(true);
                // setTimeout(() => { // 设置延时，异步数据
                //     this.myChart.setOption({
                //         xAxis: {
                //             data: this.date,
                //         },
                //         series: [{
                //             type: 'line',
                //             name: '风速',
                //             data: this.data
                //         }]
                //     });
                // }, 500);
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
            }, 3000);
        }
        // @ts-ignore
        this.myChart.setOption(this.chartOption); // 注意此处只是将data更新，必须要写一遍setOption，否则会报错！
    }

    storageData() {
        sessionStorage.setItem(this.dateName, JSON.stringify(this.date));
        sessionStorage.setItem(this.dataName, JSON.stringify(this.data));
    }
}
