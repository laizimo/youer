import {FindRecommendComponent} from './pages/recommend/find-recommend.component';
import {FindArticleComponent} from './pages/article/find-article.component';
/**
 * Created by zimo on 2017/4/22.
 */

export const findRoutes = [
  {
    path: '',
    redirectTo: 'recommend',
    pathMatch: 'full',
  },
  {
    path: 'recommend',
    component: FindRecommendComponent
  },
  {
    path: 'article',
    component: FindArticleComponent
  }
];
