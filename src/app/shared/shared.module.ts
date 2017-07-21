
import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCheckboxModule, MdGridListModule, MdIconModule, MdInputModule, MdRadioModule, MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {BsDropdownModule, CarouselModule, PaginationModule} from 'ngx-bootstrap';
import {TranslateModule} from 'ng2-translate';
import {NavDropdownDirective} from '../Directive/nav-dropdown.directive';
import {UlMouseDirective} from '../Directive/divHidden.directive';
import {PatentItemComponent} from '../component/patentItem/patent-item.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PaginationConfig} from '../Serivce/Pagination.config';
import {ImageZoomModule} from 'angular2-image-zoom';
import {PatentListDirective} from '../Directive/divShow.directive';
import {RouterModule} from '@angular/router';
import {sharedRoutes} from './share.routes';
import {PatentDetailComponent} from '../index/pages/patentDetail/patent-detail.component';
import {DesignerDetailComponent} from '../index/pages/designerDetail/designer-detail.component';
import { DatepickerModule } from 'angular2-material-datepicker';
import {ThreeLinkAddressComponent} from '../component/threeLinkSelector/three-link.component';
import {ThreeLinkAddressService} from '../component/threeLinkSelector/three-link.serivice';
import {ArticleItemComponent} from '../component/articleitem/article-item.component';

const MD_MODULE = [
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdGridListModule,
  MdTabsModule,
  MdRadioModule,
  MdSelectModule,
  MdCheckboxModule
];

const BP_MODULE = [
  CarouselModule,
  BsDropdownModule,
  PaginationModule,
];

const CU_DIRECTIVE = [
  NavDropdownDirective,
  UlMouseDirective,
  PatentItemComponent,
  PatentListDirective,
  PatentDetailComponent,
  DesignerDetailComponent,
  ThreeLinkAddressComponent,
  ArticleItemComponent
];

const DF_MODULE = [
  TranslateModule,
  CommonModule,
  FormsModule,
  ImageZoomModule,
  DatepickerModule,
];

const SHARE_MODULE = [
  PaginationConfig
];


@NgModule({
  declarations: [
    ...CU_DIRECTIVE
  ],
  imports: [
    ...MD_MODULE,
    ...BP_MODULE,
    ...DF_MODULE,
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [
    ...MD_MODULE,
    ...BP_MODULE,
    ...DF_MODULE,
    ...CU_DIRECTIVE,
  ],
  providers: [
    ThreeLinkAddressService
  ]
})
export class SharedModule {

}
