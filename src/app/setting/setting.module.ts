/**
 * Created by zimo on 2017/4/25.
 */
import {NgModule} from '@angular/core';
import {SettingComponent} from './setting.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {settingRoutes} from './setting.routes';
import {SettingProfileComponent} from './pages/profile/setting-profile.component';
import {SettingPasswordComponent} from './pages/password/setting-password.component';

@NgModule({
  declarations: [
    SettingComponent,
    SettingProfileComponent,
    SettingPasswordComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(settingRoutes)
  ],
  exports: [],
  providers: []
})
export class SettingModule {

}
