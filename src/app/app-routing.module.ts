import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './root/home/home.component';
import {HOME_ROUTES} from './pages/main-routes';
import {DataTestComponent} from './root/data-test/data-test.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: HOME_ROUTES
  },
  {
    path: 'test-data',
    component: DataTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
