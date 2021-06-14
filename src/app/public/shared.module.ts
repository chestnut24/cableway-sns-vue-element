import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PipesModule} from './pipes';
import {JnTableComponent} from './components/jn-table/jn-table.component';
import {DevelopingComponent} from './components/developing/developing.component';
import {BatchDeleteComponent} from './batch-delete/batch-delete.component';
import { FullScreenDirective } from './directive/full-screen.directive';




@NgModule({
  declarations: [
    JnTableComponent,
    DevelopingComponent,
    BatchDeleteComponent,
    FullScreenDirective
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule
  ],
    exports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        PipesModule,
        JnTableComponent,
        DevelopingComponent,
        BatchDeleteComponent,
        FullScreenDirective
    ],
  entryComponents: [
  ]
})
export class SharedModule { }
