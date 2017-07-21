/**
 * Created by zimo on 2017/4/21.
 */
import {NgModule } from '@angular/core';
import {IndexComponent} from './pages/index/index.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {indexRoutes} from './index.routes';
import {MnFullpageModule} from 'ngx-fullpage';
import {PatentDetailComponent} from './pages/patentDetail/patent-detail.component';
import {DesignerDetailComponent} from './pages/designerDetail/designer-detail.component';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(indexRoutes),
    MnFullpageModule
  ],
  exports: [],
  providers: [],
})
export class IndexModule {

}
