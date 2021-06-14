export interface WindSupport {
    code: number;
    success: boolean;
    msg: string;
    data: WindData[]; // 数据数组
}

export interface WindData {
    time: number; // 时间
    v: string; // 风速
}
