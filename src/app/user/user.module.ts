/**
 * Created by zimo on 2017/4/24.
 */
import {NgModule} from '@angular/core';
import {UserCustomComponent} from './pages/user-custom/user-custom.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import {UserCartComponent} from './pages/cart/user-cart.component';
import {CartItemComponent} from '../component/cartitem/cart-item.component';
import {UserOrderComponent} from './pages/order/user-order.component';
import {OrderItemComponent} from '../component/orderItem/order-item.component';

@NgModule({
  declarations: [
    UserCustomComponent,
    UserCartComponent,
    CartItemComponent,
    UserOrderComponent,
    OrderItemComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [],
  providers: [],
})
export class UserModule {

}
