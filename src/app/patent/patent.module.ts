/**
 * Created by zimo on 2017/4/23.
 */
import {NgModule} from '@angular/core';
import {PatentComponent} from './patent.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {patentRoutes} from './patent.routes';
import {WeiJinComponent} from './pages/weijin/weijin.component';
import {PatentClassifyService} from './pages/weijin/weijin.serivce';

@NgModule({
  declarations: [
    PatentComponent,
    WeiJinComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(patentRoutes)
  ],
  exports: [],
  providers: [
    PatentClassifyService
  ],
})
export class PatentModule {

}
