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
            breadcrumb: '???????????????...'
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
                    breadcrumb: '????????????'
                }
            },
            {
                path: 'userList',
                component: UserListComponent,
                data: {
                    breadcrumb: '????????????'
                }
            },
            {
                path: 'usersList',
                component: UsersListComponent,
                data: {
                    breadcrumb: '????????????'
                }
            },
        ],
        data: {
            breadcrumb: '????????????'
        }
    },
    {
        path: 'homePage',
        component: HomePageComponent,
        data: {
            breadcrumb: '??????'
        }
    },
    {
        path: 'cableHolding',
        component: CableHoldingForceComponent,
        data: {
            breadcrumb: '?????????'
        },
    },
    {
        path: 'cableHoldingHistory',
        component: CableHoldingHistoryComponent,
        data: {
            breadcrumb: '????????????'
        },
    },
    {
        path: 'temperature',
        component: TemperaturePageComponent,
        data: {
            breadcrumb: '??????'
        },
        children: [
            {
                path: 'topStation',
                component: TopStationTemperatureComponent,
                data: {
                    breadcrumb: '????????????'
                }
            },
            {
                path: 'midStation',
                component: MidStationTemperatureComponent,
                data: {
                    breadcrumb: '???????????????'
                }
            },
        ]
    },
    {
        path: 'driveAuxiliary',
        component: DriveAuxiliaryMachineComponent,
        data: {
            breadcrumb: '?????????'
        },
        children: [
            {
                path: 'topStation',
                component: TopStationDriveAuxiliaryComponent,
                data: {
                    breadcrumb: '???????????????'
                }
            },
            {
                path: 'midStation',
                component: MidStationDriveAuxiliaryComponent,
                data: {
                    breadcrumb: '??????????????????'
                }
            }
        ]
    },
    {
        path: 'topStation',
        component: TopStationComponent,
        data: {
            breadcrumb: '??????'
        }
    },
    {
        path: 'midStation',
        component: MidStationComponent,
        data: {
            breadcrumb: '?????????'
        }
    },
    {
        path: 'bottomStation',
        component: BottomStationComponent,
        data: {
            breadcrumb: '??????'
        }
    },
    {
        path: 'speedElectricity',
        component: SpeedElectricityComponent,
        data: {
            breadcrumb: '????????????'
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
                    breadcrumb: '???????????????'
                },
            },
            {
                path: 'speedElectMidStation',
                component: SpeedElectMidStationComponent,
                data: {
                    breadcrumb: '??????????????????'
                },
            },
        ],
    },
    {
        path: 'supportWind',
        component: SupportWindComponent,
        data: {
            breadcrumb: '????????????'
        },
        children: [
            {
                path: '',
                component: TopSupport18Component,
                data: {
                    breadcrumb: '??????18?????????'
                },
            },
            {
                path: 'top27',
                component: TopSupport27Component,
                data: {
                    breadcrumb: '??????27?????????'
                },
            },
            {
                path: 'bottom13',
                component: BottomSupport13Component,
                data: {
                    breadcrumb: '??????13?????????'
                },
            },
            {
                path: 'bottom17',
                component: BottomSupport17Component,
                data: {
                    breadcrumb: '??????17?????????'
                },
            }
        ],
    },
    {
        path: 'circuitousTension',
        component: CircuitousTensionComponent,
        data: {
            breadcrumb: '????????????'
        },
        children: [
            {
                path: '',
                component: TopTensionComponent,
                data: {
                    breadcrumb: '????????????'
                },
            },
            {
                path: 'bottom',
                component: BottomTensionComponent,
                data: {
                    breadcrumb: '????????????'
                },
            },
        ],
    },
    {
        path: 'turnoutPage',
        component: TurnoutPageComponent,
        data: {
            breadcrumb: '??????'
        }
    },
    {
        path: 'controlRunning',
        component: ControlRunningComponent,
        data: {
            breadcrumb: '????????????'
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
                    breadcrumb: '????????????'
                },
            },
            {
                path: 'middleDrive',
                component: MiddleDriveComponent,
                data: {
                    breadcrumb: '????????????'
                },
            },
            {
                path: 'middleAround',
                component: MiddleAroundComponent,
                data: {
                    breadcrumb: '????????????'
                },
            },
            {
                path: 'bottomAround',
                component: BottomAroundComponent,
                data: {
                    breadcrumb: '????????????'
                },
            }
        ]
    },
    {
        path: 'faultList',
        component: FaultListComponent,
        data: {
            breadcrumb: '????????????'
        }
    },
    {
        path: 'useDirection',
        component: UseDirectionComponent,
        data: {
            breadcrumb: '????????????'
        }
    },
    {
        path: 'bottomStation',
        component: BottomStationComponent,
        data: {
          breadcrumb: '??????'
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
            breadcrumb: '??????'
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
                    breadcrumb: '??????'
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
                            breadcrumb: '????????????'
                        }
                    },
                    {
                        path: 'testTopTopDrive',
                        component: TestTopTopDriveComponent,
                        data: {
                            breadcrumb: '??????????????????????????????'
                        }
                    },
                    {
                        path: 'testTopMiddleDrive',
                        component: TestTopMiddleDriveComponent,
                        data: {
                            breadcrumb: '??????????????????????????????'
                        }
                    },
                    {
                        path: 'testTopCountPulse',
                        component: TestTopCountPulseComponent,
                        data: {
                            breadcrumb: '??????????????????'
                        }
                    },
                    {
                        path: 'testTopCablewayForce',
                        component: TestTopCablewayForceComponent,
                        data: {
                            breadcrumb: '???????????????'
                        }
                    },
                    {
                        path: 'testTopHighPulse',
                        component: TestTopHighPulseComponent,
                        data: {
                            breadcrumb: '?????????????????????'
                        }
                    },
                    {
                        path: 'testTopLowPulse',
                        component: TestTopLowPulseComponent,
                        data: {
                            breadcrumb: '?????????????????????'
                        }
                    },
                ],
            },
            {
                path: 'testMiddleStation',
                component: TestMiddleStationComponent,
                data: {
                    breadcrumb: '?????????'
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
                            breadcrumb: '??????????????????'
                        }
                    },
                    {
                        path: 'testMiddleMiddleTension',
                        component: TestMiddleMiddleTensionComponent,
                        data: {
                            breadcrumb: '??????????????????'
                        }
                    },
                    {
                        path: 'testMiddleCountPulse',
                        component: TestMiddleCountPulseComponent,
                        data: {
                            breadcrumb: '??????????????????'
                        }
                    },
                    {
                        path: 'testMiddleCablewayForce',
                        component: TestMiddleCablewayForceComponent,
                        data: {
                            breadcrumb: '???????????????'
                        }
                    },
                    {
                        path: 'testMiddleHighPulse',
                        component: TestMiddleHighPulseComponent,
                        data: {
                            breadcrumb: '?????????????????????'
                        }
                    },
                    {
                        path: 'testMiddleLowPulse',
                        component: TestMiddleLowPulseComponent,
                        data: {
                            breadcrumb: '?????????????????????'
                        }
                    },
                ],
            },
        ],
    },
];
