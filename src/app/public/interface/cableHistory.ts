export interface CableHistory {
    time: string; // 时间
    startTime: string; // 开始时间
    endTime: string; // 结束时间
    name: string; // 站点
    title: string; // 进出站侧
    zd: string; // 站点
    zc: string; // 进出站侧
    isNotAlarm: boolean; // 是否警告
    alarmValue: boolean; // 警告的值
    v: string; // 抱索力值
}
