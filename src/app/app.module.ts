import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SERVICES} from './services';
import {RootModule} from './root/root.module';
import {MainModule} from './pages/main-modules';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TopStationComponent } from './pages/top-station/top-station.component';
import { MidStationComponent } from './pages/mid-station/mid-station.component';
import { BottomStationComponent } from './pages/bottom-station/bottom-station.component';
import { CircuitousTensionComponent } from './pages/circuitous-tension/circuitous-tension.component';
import { TurnoutPageComponent } from './pages/turnout-page/turnout-page.component';
import { CableHoldingForceComponent } from './pages/cable-holding-force/cable-holding-force.component';
import { CableHoldingHistoryComponent } from './pages/cable-holding-force/cable-holding-history/cable-holding-history.component';
import {SharedModule} from './public/shared.module';
import { TemperaturePageComponent } from './pages/temperature-page/temperature-page.component';
import { TopStationTemperatureComponent } from './pages/temperature-page/top-station-temperature/top-station-temperature.component';
import { MidStationTemperatureComponent } from './pages/temperature-page/mid-station-temperature/mid-station-temperature.component';
import { DriveAuxiliaryMachineComponent } from './pages/drive-auxiliary-machine/drive-auxiliary-machine.component';
import { TopStationDriveAuxiliaryComponent } from './pages/drive-auxiliary-machine/top-station-drive-auxiliary/top-station-drive-auxiliary.component';
import { MidStationDriveAuxiliaryComponent } from './pages/drive-auxiliary-machine/mid-station-drive-auxiliary/mid-station-drive-auxiliary.component';
import { SupportWindComponent } from './pages/support-wind/support-wind.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { TestComponent } from './pages/test/test.component';
import { TestTopStationComponent } from './pages/test/test-top-station/test-top-station.component';
import { TestMiddleStationComponent } from './pages/test/test-middle-station/test-middle-station.component';
import { TestTopSpeedingComponent } from './pages/test/test-top-station/test-top-speeding/test-top-speeding.component';
import { TestTopTopDriveComponent } from './pages/test/test-top-station/test-top-top-drive/test-top-top-drive.component';
import { TestTopMiddleDriveComponent } from './pages/test/test-top-station/test-top-middle-drive/test-top-middle-drive.component';
import { TestTopCountPulseComponent } from './pages/test/test-top-station/test-top-count-pulse/test-top-count-pulse.component';
import { TestTopCablewayForceComponent } from './pages/test/test-top-station/test-top-cableway-force/test-top-cableway-force.component';
import { TestTopHighPulseComponent } from './pages/test/test-top-station/test-top-high-pulse/test-top-high-pulse.component';
import { TestTopLowPulseComponent } from './pages/test/test-top-station/test-top-low-pulse/test-top-low-pulse.component';
import en from '@angular/common/locales/en';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { TopTensionComponent } from './pages/circuitous-tension/top-tension/top-tension.component';
import { BottomTensionComponent } from './pages/circuitous-tension/bottom-tension/bottom-tension.component';
import { TopSupport18Component } from './pages/support-wind/top-support18/top-support18.component';
import { TopSupport27Component } from './pages/support-wind/top-support27/top-support27.component';
import { BottomSupport13Component } from './pages/support-wind/bottom-support13/bottom-support13.component';
import { BottomSupport17Component } from './pages/support-wind/bottom-support17/bottom-support17.component';
import { WindChartComponent } from './pages/support-wind/wind-chart/wind-chart.component';
import { TestMiddleBottomTensionComponent } from './pages/test/test-middle-station/test-middle-bottom-tension/test-middle-bottom-tension.component';
import { TestMiddleMiddleTensionComponent } from './pages/test/test-middle-station/test-middle-middle-tension/test-middle-middle-tension.component';
import { TestMiddleCountPulseComponent } from './pages/test/test-middle-station/test-middle-count-pulse/test-middle-count-pulse.component';
import { TestMiddleCablewayForceComponent } from './pages/test/test-middle-station/test-middle-cableway-force/test-middle-cableway-force.component';
import { TestMiddleHighPulseComponent } from './pages/test/test-middle-station/test-middle-high-pulse/test-middle-high-pulse.component';
import { TestMiddleLowPulseComponent } from './pages/test/test-middle-station/test-middle-low-pulse/test-middle-low-pulse.component';
import { SpeedElectricityComponent } from './pages/speed-electricity/speed-electricity.component';
import { SpeedElectTopStationComponent } from './pages/speed-electricity/speed-elect-top-station/speed-elect-top-station.component';
import { SpeedElectMidStationComponent } from './pages/speed-electricity/speed-elect-mid-station/speed-elect-mid-station.component';
import { FaultListComponent } from './pages/fault-list/fault-list.component';
import { UseDirectionComponent } from './pages/use-direction/use-direction.component';
import { WindEchartsComponent } from './pages/support-wind/wind-echarts/wind-echarts.component';
import {ControlRunningModule} from './pages/control-running/control-running.module';
import { UpFileComponent } from './pages/up-file/up-file.component';
import {AuthInterceptor} from './public/interceptor/auth.interceptor';
import { SpeedEchartsComponent } from './pages/speed-electricity/speed-echarts/speed-echarts.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopStationComponent,
    MidStationComponent,
    BottomStationComponent,
    CableHoldingForceComponent,
    CableHoldingHistoryComponent,
    TemperaturePageComponent,
    TopStationTemperatureComponent,
    MidStationTemperatureComponent,
    DriveAuxiliaryMachineComponent,
    TopStationDriveAuxiliaryComponent,
    MidStationDriveAuxiliaryComponent,
    SupportWindComponent,
    OverviewComponent,
    CircuitousTensionComponent,
    CableHoldingForceComponent,
    TurnoutPageComponent,
    CableHoldingForceComponent,
    TestComponent,
    TestTopStationComponent,
    TestMiddleStationComponent,
    TestTopSpeedingComponent,
    TestTopTopDriveComponent,
    TestTopMiddleDriveComponent,
    TestTopCountPulseComponent,
    TestTopCablewayForceComponent,
    TestTopHighPulseComponent,
    TestTopLowPulseComponent,
    TopTensionComponent,
    BottomTensionComponent,
    TopSupport18Component,
    TopSupport27Component,
    BottomSupport13Component,
    BottomSupport17Component,
    WindChartComponent,
    TestMiddleBottomTensionComponent,
    TestMiddleMiddleTensionComponent,
    TestMiddleCountPulseComponent,
    TestMiddleCablewayForceComponent,
    TestMiddleHighPulseComponent,
    TestMiddleLowPulseComponent,
    SpeedElectricityComponent,
    SpeedElectTopStationComponent,
    SpeedElectMidStationComponent,
    FaultListComponent,
    UseDirectionComponent,
    WindEchartsComponent,
    UpFileComponent,
    SpeedEchartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RootModule,
    MainModule,
    NzSwitchModule,
    SharedModule,
    ControlRunningModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ...SERVICES
  ],
  bootstrap: [AppComponent],
  entryComponents: [UpFileComponent, SpeedEchartsComponent],

})
export class AppModule { }
