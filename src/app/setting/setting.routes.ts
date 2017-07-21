import {SettingComponent} from './setting.component';
import {SettingProfileComponent} from './pages/profile/setting-profile.component';
import {SettingPasswordComponent} from './pages/password/setting-password.component';
/**
 * Created by zimo on 2017/4/25.
 */
export const settingRoutes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'profile',
        component: SettingProfileComponent
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'password',
        component: SettingPasswordComponent
      }
    ]
  }
];
