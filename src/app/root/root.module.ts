import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../public/shared.module';
import { LeftDrawerComponent } from './left-drawer/left-drawer.component';
import { RedGreenListComponent } from './red-green-list/red-green-list.component';
import { TopWarningListComponent } from './top-warning-list/top-warning-list.component';
import { DataTestComponent } from './data-test/data-test.component';
import { ChangeUserComponent } from './home/components/change-user/change-user.component';
import { ChangePosswordComponent } from './home/components/change-possword/change-possword.component';




@NgModule({
  declarations: [HomeComponent, LeftDrawerComponent, RedGreenListComponent, TopWarningListComponent, DataTestComponent, ChangeUserComponent, ChangePosswordComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RedGreenListComponent,
    TopWarningListComponent,
    // DataTestComponent
  ],
  entryComponents: [LeftDrawerComponent, ChangeUserComponent, ChangePosswordComponent]
})
export class RootModule { }
