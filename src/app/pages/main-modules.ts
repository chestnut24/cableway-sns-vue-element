import {SharedModule} from '../public/shared.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UserModule} from './user/user.module';
import {OverviewModule} from './overview/overview.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    OverviewModule
  ]
})
export class MainModule { }
