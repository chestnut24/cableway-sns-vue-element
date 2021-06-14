import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../public/shared.module';
import { OverviewTopStationComponent } from './overview-top-station/overview-top-station.component';
import { OverviewMidStationComponent } from './overview-mid-station/overview-mid-station.component';
import { OverviewBottomStationComponent } from './overview-bottom-station/overview-bottom-station.component';
import { OverviewStationInfoComponent } from './overview-station-info/overview-station-info.component';
import { OverviewWitchIconComponent } from './overview-witch-icon/overview-witch-icon.component';



@NgModule({
  declarations: [OverviewTopStationComponent, OverviewMidStationComponent, OverviewBottomStationComponent, OverviewStationInfoComponent, OverviewWitchIconComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OverviewModule { }
