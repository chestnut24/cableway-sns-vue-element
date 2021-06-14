export interface SpeedElectricity {
    code: number;
    success: boolean;
    msg: string;
    data: SpeedData[]; // 数据数组
}

export interface SpeedData {
    time: number; // 时间
    v: string; // 运行速度或者电流
}
