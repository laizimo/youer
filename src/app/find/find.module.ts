/**
 * Created by zimo on 2017/4/22.
 */
import {NgModule} from '@angular/core';
import {FindRecommendComponent} from './pages/recommend/find-recommend.component';
import {RouterModule} from '@angular/router';
import {findRoutes} from './find.routes';
import {SharedModule} from '../shared/shared.module';
import {FindRecommendService} from './pages/recommend/find-recommend.service';
import {FindArticleComponent} from './pages/article/find-article.component';
import {FindArticleService} from "./pages/article/find-article.service";

@NgModule({
  declarations: [
    FindRecommendComponent,
    FindArticleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(findRoutes)
  ],
  exports: [],
  providers: [
    FindRecommendService,
    FindArticleService
  ],
})
export class FindModule {
}
