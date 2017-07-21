import {IndexComponent} from './pages/index/index.component';
import {PatentDetailComponent} from './pages/patentDetail/patent-detail.component';
import {DesignerDetailComponent} from './pages/designerDetail/designer-detail.component';
/**
 * Created by zimo on 2017/4/22.
 */


export const indexRoutes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'patentDetail/:id',
    component: PatentDetailComponent
  },
  {
    path: 'designerDetail/:id',
    component: DesignerDetailComponent
  }
];
