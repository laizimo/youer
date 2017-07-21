import {UserCustomComponent} from './pages/user-custom/user-custom.component';
import {UserCartComponent} from './pages/cart/user-cart.component';
import {UserOrderComponent} from './pages/order/user-order.component';
/**
 * Created by zimo on 2017/4/24.
 */
export const userRoutes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'custom',
    component: UserCustomComponent
  },
  {
    path: 'cart',
    component: UserCartComponent
  },
  {
    path: 'order',
    component: UserOrderComponent
  }
];
