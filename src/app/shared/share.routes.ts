import {PatentDetailComponent} from '../index/pages/patentDetail/patent-detail.component';
import {DesignerDetailComponent} from '../index/pages/designerDetail/designer-detail.component';
/**
 * Created by zimo on 2017/4/23.
 */
export const sharedRoutes = [
  {
    path: 'index/patentDetail/:id',
    component: PatentDetailComponent
  },
  {
    path: 'index/designerDetail/:id',
    component: DesignerDetailComponent
  }
];
