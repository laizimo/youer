/**
 * Created by zimo on 2017/4/24.
 */
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {rankRoutes} from './rank.routes';
import {RankComponent} from './rank.component';
import {RankPatentComponent} from './rank-patent/rank-patent.component';
import {RankPatentService} from './rank-patent/rank-patent.service';
import {DesignerListComponent} from '../component/designer-list/designer-list.component';
import {RankDesignerComponent} from './rank-designer/rank-designer.component';

@NgModule({
  declarations: [
    RankComponent,
    RankPatentComponent,
    DesignerListComponent,
    RankDesignerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(rankRoutes)
  ],
  exports: [],
  providers: [
    RankPatentService
  ],
})
export class RankModule {

}
