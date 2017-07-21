/**
 * Created by zimo on 2017/4/22.
 */


export const appRoutes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: './index/index.module#IndexModule'
  },
  {
    path: 'find',
    loadChildren: './find/find.module#FindModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'patent',
    loadChildren: './patent/patent.module#PatentModule'
  },
  {
    path: 'rank',
    loadChildren: './rank/rank.module#RankModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
  }
];
