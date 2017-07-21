import {HomeComponent} from './home.component';
import {HomeInfoComponent} from './pages/basic-info/basic-info.component';
import {HomeBasicComponent} from './pages/basic/basic.component';
import {HomeStarComponent} from './pages/star/home-star.component';
import {HomeFollowComponent} from './pages/follow/home-follow.component';
/**
 * Created by zimo on 2017/4/23.
 */
export const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'info',
        component: HomeInfoComponent
      },
      {
        path: '',
        component: HomeBasicComponent
      },
      {
        path: 'basic',
        component: HomeBasicComponent
      },
      {
        path: 'star',
        component: HomeStarComponent
      },
      {
        path: 'follow',
        component: HomeFollowComponent
      }
    ]
  }
];
