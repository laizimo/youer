import {RankComponent} from './rank.component';
import {RankPatentComponent} from './rank-patent/rank-patent.component';
import {RankDesignerComponent} from './rank-designer/rank-designer.component';
/**
 * Created by zimo on 2017/4/24.
 */
export const rankRoutes = [
  {
    path: '',
    component: RankComponent,
    children: [
      {
        path: '',
        redirectTo: 'patent',
        pathMatch: 'full'
      },
      {
        path: 'patent',
        component: RankPatentComponent
      },
      {
        path: 'designer',
        component: RankDesignerComponent
      }
    ]
  }
];
