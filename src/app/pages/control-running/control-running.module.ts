import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlRunningComponent } from './control-running.component';
import { MiddleDriveComponent } from './middle-drive/middle-drive.component';
import { TopDriveComponent } from './top-drive/top-drive.component';
import {RouterModule} from '@angular/router';
import { MiddleAroundComponent } from './middle-around/middle-around.component';
import { BottomAroundComponent } from './bottom-around/bottom-around.component';
import {NzSwitchModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ControlRunningComponent,  MiddleDriveComponent, TopDriveComponent, MiddleAroundComponent, BottomAroundComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzSwitchModule,
    FormsModule,
  ],
})
export class ControlRunningModule { }
