import {Routes} from '@angular/router';
import {DevelopingComponent} from '../public/components/developing/developing.component';
import {UsersListComponent} from './user/users-list/users-list.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {RoleListComponent} from './user/role-list/role-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {TopStationComponent} from './top-station/top-station.component';
import {MidStationComponent} from './mid-station/mid-station.component';
import {BottomStationComponent} from './bottom-station/bottom-station.component';
import {CircuitousTensionComponent} from './circuitous-tension/circuitous-tension.component';
import {TurnoutPageComponent} from './turnout-page/turnout-page.component';
import {CableHoldingForceComponent} from './cable-holding-force/cable-holding-force.component';
import {CableHoldingHistoryComponent} from './cable-holding-force/cable-holding-history/cable-holding-history.component';
import {TemperaturePageComponent} from './temperature-page/temperature-page.component';
import {TopStationTemperatureComponent} from './temperature-page/top-station-temperature/top-station-temperature.component';
import {MidStationTemperatureComponent} from './temperature-page/mid-station-temperature/mid-station-temperature.component';
import {DriveAuxiliaryMachineComponent} from './drive-auxiliary-machine/drive-auxiliary-machine.component';
import {TopStationDriveAuxiliaryComponent} from './drive-auxiliary-machine/top-station-drive-auxiliary/top-station-drive-auxiliary.component';
import {MidStationDriveAuxiliaryComponent} from './drive-auxiliary-machine/mid-station-drive-auxiliary/mid-station-drive-auxiliary.component';
import {SupportWindComponent} from './support-wind/support-wind.component';
import {TestComponent} from './test/test.component';
import {TestTopStationComponent} from './test/test-top-station/test-top-station.component';
import {TestMiddleStationComponent} from './test/test-middle-station/test-middle-station.component';
import {TestTopSpeedingComponent} from './test/test-top-station/test-top-speeding/test-top-speeding.component';
import {TestTopTopDriveComponent} from './test/test-top-station/test-top-top-drive/test-top-top-drive.component';
import {TestTopMiddleDriveComponent} from './test/test-top-station/test-top-middle-drive/test-top-middle-drive.component';
import {TestTopCountPulseComponent} from './test/test-top-station/test-top-count-pulse/test-top-count-pulse.component';
import {TestTopCablewayForceComponent} from './test/test-top-station/test-top-cableway-force/test-top-cableway-force.component';
import {TestTopHighPulseComponent} from './test/test-top-station/test-top-high-pulse/test-top-high-pulse.component';
import {TestTopLowPulseComponent} from './test/test-top-station/test-top-low-pulse/test-top-low-pulse.component';
import {TopTensionComponent} from './circuitous-tension/top-tension/top-tension.component';
import {BottomTensionComponent} from './circuitous-tension/bottom-tension/bottom-tension.component';
import {TopSupport18Component} from './support-wind/top-support18/top-support18.component';
import {TopSupport27Component} from './support-wind/top-support27/top-support27.component';
import {BottomSupport13Component} from './support-wind/bottom-support13/bottom-support13.component';
import {BottomSupport17Component} from './support-wind/bottom-support17/bottom-support17.component';
// tslint:disable-next-line:max-line-length
import {TestMiddleBottomTensionComponent} from './test/test-middle-station/test-middle-bottom-tension/test-middle-bottom-tension.component';
// tslint:disable-next-line:max-line-length
import {TestMiddleMiddleTensionComponent} from './test/test-middle-station/test-middle-middle-tension/test-middle-middle-tension.component';
import {TestMiddleCountPulseComponent} from './test/test-middle-station/test-middle-count-pulse/test-middle-count-pulse.component';
// tslint:disable-next-line:max-line-length
import { FaultListComponent } from './fault-list/fault-list.component';
import {TestMiddleCablewayForceComponent} from './test/test-middle-station/test-middle-cableway-force/test-middle-cableway-force.component';
import {TestMiddleHighPulseComponent} from './test/test-middle-station/test-middle-high-pulse/test-middle-high-pulse.component';
import {TestMiddleLowPulseComponent} from './test/test-middle-station/test-middle-low-pulse/test-middle-low-pulse.component';
import {SpeedElectricityComponent} from './speed-electricity/speed-electricity.component';
import {SpeedElectTopStationComponent} from './speed-electricity/speed-elect-top-station/speed-elect-top-station.component';
import {SpeedElectMidStationComponent} from './speed-electricity/speed-elect-mid-station/speed-elect-mid-station.component';
import {OverviewComponent} from './overview/overview.component';
import {OverviewTopStationComponent} from './overview/overview-top-station/overview-top-station.component';
import {OverviewMidStationComponent} from './overview/overview-mid-station/overview-mid-station.component';
import {OverviewBottomStationComponent} from './overview/overview-bottom-station/overview-bottom-station.component';
import { UseDirectionComponent } from './use-direction/use-direction.component';
import { ControlRunningComponent } from './control-running/control-running.component';
import { MiddleDriveComponent } from './control-running/middle-drive/middle-drive.component';
import { TopDriveComponent } from './control-running/top-drive/top-drive.component';
import { MiddleAroundComponent } from './control-running/middle-around/middle-around.component';
import { BottomAroundComponent } from './control-running/bottom-around/bottom-around.component';


export const HOME_ROUTES: Routes = [
    {
        path: 'developing',
        component: DevelopingComponent,
        data: {
            breadcrumb: '正在开发中...'
        }
    },
    {
        path: 'users',
        children: [
            {
                path: '',
                redirectTo: 'userList',
                pathMatch: 'full'
            },
            {
                path: 'roleList',
                component: RoleListComponent,
                data: {
                    breadcrumb: '角色列表'
                }
            },
            {
                path: 'userList',
                component: UserListComponent,
                data: {
                    breadcrumb: '用户列表'
                }
            },
            {
                path: 'usersList',
                component: UsersListComponent,
                data: {
                    breadcrumb: '部门列表'
                }
            },
        ],
        data: {
            breadcrumb: '用户管理'
        }
    },
    {
        path: 'homePage',
        component: HomePageComponent,
        data: {
            breadcrumb: '首页'
        }
    },
    {
        path: 'cableHolding',
        component: CableHoldingForceComponent,
        data: {
            breadcrumb: '抱锁力'
        },
    },
    {
        path: 'cableHoldingHistory',
        component: CableHoldingHistoryComponent,
        data: {
            breadcrumb: '历史记录'
        },
    },
    {
        path: 'temperature',
        component: TemperaturePageComponent,
        data: {
            breadcrumb: '温度'
        },
        children: [
            {
                path: 'topStation',
                component: TopStationTemperatureComponent,
                data: {
                    breadcrumb: '上站温度'
                }
            },
            {
                path: 'midStation',
                component: MidStationTemperatureComponent,
                data: {
                    breadcrumb: '中间站温度'
                }
            },
        ]
    },
    {
        path: 'driveAuxiliary',
        component: DriveAuxiliaryMachineComponent,
        data: {
            breadcrumb: '驱辅机'
        },
        children: [
            {
                path: 'topStation',
                component: TopStationDriveAuxiliaryComponent,
                data: {
                    breadcrumb: '上站驱辅机'
                }
            },
            {
                path: 'midStation',
                component: MidStationDriveAuxiliaryComponent,
                data: {
                    breadcrumb: '中间站驱辅机'
                }
            }
        ]
    },
    {
        path: 'topStation',
        component: TopStationComponent,
        data: {
            breadcrumb: '上站'
        }
    },
    {
        path: 'midStation',
        component: MidStationComponent,
        data: {
            breadcrumb: '中间站'
        }
    },
    {
        path: 'bottomStation',
        component: BottomStationComponent,
        data: {
            breadcrumb: '下站'
        }
    },
    {
        path: 'speedElectricity',
        component: SpeedElectricityComponent,
        data: {
            breadcrumb: '速度电流'
        },
        children: [
            {
                path: '',
                redirectTo: 'speedElectTopStation',
                pathMatch: 'full'
            },
            {
                path: 'speedElectTopStation',
                component: SpeedElectTopStationComponent,
                data: {
                    breadcrumb: '上站主电机'
                },
            },
            {
                path: 'speedElectMidStation',
                component: SpeedElectMidStationComponent,
                data: {
                    breadcrumb: '中间站主电机'
                },
            },
        ],
    },
    {
        path: 'supportWind',
        component: SupportWindComponent,
        data: {
            breadcrumb: '支架风速'
        },
        children: [
            {
                path: '',
                component: TopSupport18Component,
                data: {
                    breadcrumb: '上段18号支架'
                },
            },
            {
                path: 'top27',
                component: TopSupport27Component,
                data: {
                    breadcrumb: '上段27号支架'
                },
            },
            {
                path: 'bottom13',
                component: BottomSupport13Component,
                data: {
                    breadcrumb: '下段13号支架'
                },
            },
            {
                path: 'bottom17',
                component: BottomSupport17Component,
                data: {
                    breadcrumb: '下段17号支架'
                },
            }
        ],
    },
    {
        path: 'circuitousTension',
        component: CircuitousTensionComponent,
        data: {
            breadcrumb: '张紧系统'
        },
        children: [
            {
                path: '',
                component: TopTensionComponent,
                data: {
                    breadcrumb: '上站张紧'
                },
            },
            {
                path: 'bottom',
                component: BottomTensionComponent,
                data: {
                    breadcrumb: '下站张紧'
                },
            },
        ],
    },
    {
        path: 'turnoutPage',
        component: TurnoutPageComponent,
        data: {
            breadcrumb: '道岔'
        }
    },
    {
        path: 'controlRunning',
        component: ControlRunningComponent,
        data: {
            breadcrumb: '控制运行'
        },
        children: [
            {
                path: '',
                redirectTo: 'topDrive',
                pathMatch: 'full'
            },
            {
                path: 'topDrive',
                component: TopDriveComponent,
                data: {
                    breadcrumb: '上站驱动'
                },
            },
            {
                path: 'middleDrive',
                component: MiddleDriveComponent,
                data: {
                    breadcrumb: '中站驱动'
                },
            },
            {
                path: 'middleAround',
                component: MiddleAroundComponent,
                data: {
                    breadcrumb: '中站迂回'
                },
            },
            {
                path: 'bottomAround',
                component: BottomAroundComponent,
                data: {
                    breadcrumb: '下站迂回'
                },
            }
        ]
    },
    {
        path: 'faultList',
        component: FaultListComponent,
        data: {
            breadcrumb: '故障列表'
        }
    },
    {
        path: 'useDirection',
        component: UseDirectionComponent,
        data: {
            breadcrumb: '使用说明'
        }
    },
    {
        path: 'bottomStation',
        component: BottomStationComponent,
        data: {
          breadcrumb: '下站'
        }
    },
    {
        path: 'overview',
        component: OverviewComponent,
        children: [
            {
                path: 'top',
                component: OverviewTopStationComponent,
            },
            {
                path: 'mid',
                component: OverviewMidStationComponent,
            },
            {
                path: 'bottom',
                component: OverviewBottomStationComponent,
            },
        ]
    },
    {
        path: 'test',
        component: TestComponent,
        data: {
            breadcrumb: '测试'
        },
        children: [
            {
                path: '',
                redirectTo: 'testTopStation',
                pathMatch: 'full'
            },
            {
                path: 'testTopStation',
                component: TestTopStationComponent,
                data: {
                    breadcrumb: '上站'
                },
                children: [
                    {
                        path: '',
                        redirectTo: 'testTopSpeeding',
                        pathMatch: 'full'
                    },
                    {
                        path: 'testTopSpeeding',
                        component: TestTopSpeedingComponent,
                        data: {
                            breadcrumb: '超速测试'
                        }
                    },
                    {
                        path: 'testTopTopDrive',
                        component: TestTopTopDriveComponent,
                        data: {
                            breadcrumb: '上站驱动单闸制动测试'
                        }
                    },
                    {
                        path: 'testTopMiddleDrive',
                        component: TestTopMiddleDriveComponent,
                        data: {
                            breadcrumb: '中站驱动单闸制动测试'
                        }
                    },
                    {
                        path: 'testTopCountPulse',
                        component: TestTopCountPulseComponent,
                        data: {
                            breadcrumb: '计数脉冲测试'
                        }
                    },
                    {
                        path: 'testTopCablewayForce',
                        component: TestTopCablewayForceComponent,
                        data: {
                            breadcrumb: '抱索力测试'
                        }
                    },
                    {
                        path: 'testTopHighPulse',
                        component: TestTopHighPulseComponent,
                        data: {
                            breadcrumb: '高速轮脉冲测试'
                        }
                    },
                    {
                        path: 'testTopLowPulse',
                        component: TestTopLowPulseComponent,
                        data: {
                            breadcrumb: '低速轮脉冲测试'
                        }
                    },
                ],
            },
            {
                path: 'testMiddleStation',
                component: TestMiddleStationComponent,
                data: {
                    breadcrumb: '中间站'
                },
                children: [
                    {
                        path: '',
                        redirectTo: 'testMiddleBottomTension',
                        pathMatch: 'full'
                    },
                    {
                        path: 'testMiddleBottomTension',
                        component: TestMiddleBottomTensionComponent,
                        data: {
                            breadcrumb: '下站张紧测试'
                        }
                    },
                    {
                        path: 'testMiddleMiddleTension',
                        component: TestMiddleMiddleTensionComponent,
                        data: {
                            breadcrumb: '中站张紧测试'
                        }
                    },
                    {
                        path: 'testMiddleCountPulse',
                        component: TestMiddleCountPulseComponent,
                        data: {
                            breadcrumb: '计数脉冲测试'
                        }
                    },
                    {
                        path: 'testMiddleCablewayForce',
                        component: TestMiddleCablewayForceComponent,
                        data: {
                            breadcrumb: '抱索力测试'
                        }
                    },
                    {
                        path: 'testMiddleHighPulse',
                        component: TestMiddleHighPulseComponent,
                        data: {
                            breadcrumb: '高速轮脉冲测试'
                        }
                    },
                    {
                        path: 'testMiddleLowPulse',
                        component: TestMiddleLowPulseComponent,
                        data: {
                            breadcrumb: '低速轮脉冲测试'
                        }
                    },
                ],
            },
        ],
    },
];
