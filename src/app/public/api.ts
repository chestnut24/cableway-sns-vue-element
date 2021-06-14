export const API = {
    // 认证
    LOGIN: '/api/auth/login',
    // PUBLIC_LOGIN: '/api/auth/login/public',
    REFRESH_TOKEN: '/api/auth/token',
    CHANGE_PASSWORD: '/api/auth/changePassword',

    // 用户
    USER: '/api/user',
    USERS: '/api/users',
    CUSTOMER: '/api/customer',
    CUSTOMERS: '/api/customers',
    CUSTOMERS_PAGE: '/api/customers/page',
    RESET_PWD: '/api/resetPwd',
    AVATAR: '/api/avatar',
    ACCESSES: '/api/accesses',
    ROLES: '/api/roles',
    ROLE: '/api/role',
    STRUCTURE: '/api/customer/structure',
    NEXT_LEVEL_LIST: '/api/customer/nextLevelList',
    MANAGE_LEVEL: '/api/customer/level',
    CLEAR_STRUCTURE: '/api/customer/clearStructure',
    CHANGE_PHONE: '/api/auth/changePhone',
    // webSocket长链接
    WS_TELEMETRY: '/api/ws/telemetry',
    // 抱索力历史记录
    CABLE_HISTORY: '/api/bslHistory/list',
    // 导出抱索力历史记录
    EXPORT_CABLE_HISTORY: '/api/exportBslHistory',
    // 风速支架
    WIND_SUPPORT: '/api/fs',
    // 速度电流
    SPEED_ELECTRICITY: '/api/currentSpeedCurve',
    // 上传文件
    UPLOAD_FILE: '/api/upload',
     // 删除文件
    DEL_FILE: '/api/deleteFile',
    // 查询文件
    SEARCH_FILE: '/api/findUploadList',

    // 查询故障列表
    SEARCH_LIST: '/api/findAlarmPage',
    // 导出故障
    EXPORT_FAULT: '/api/alarmExport'
};
