import {PatentComponent} from './patent.component';
import {WeiJinComponent} from './pages/weijin/weijin.component';
/**
 * Created by zimo on 2017/4/23.
 */
export const patentRoutes = [
  {
    path: '',
    component: PatentComponent,
    children: [
      {
        path: '',
        redirectTo: 'classify/weijin',
        pathMatch: 'full'
      },
      {
        path: 'classify/:type',
        component: WeiJinComponent
      }
    ]
  }
];
