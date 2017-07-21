/**
 * Created by zimo on 2017/4/23.
 */
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {homeRoutes} from './home.routes';
import {HomeComponent} from './home.component';
import {HomeInfoComponent} from './pages/basic-info/basic-info.component';
import {HomeBasicComponent} from './pages/basic/basic.component';
import {HomeStarComponent} from './pages/star/home-star.component';
import {HomeStarService} from './pages/star/home-star.service';
import {HomeFollowComponent} from './pages/follow/home-follow.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeInfoComponent,
    HomeBasicComponent,
    HomeStarComponent,
    HomeFollowComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [],
  providers: [
    HomeStarService
  ]
})
export class HomeModule {

}
