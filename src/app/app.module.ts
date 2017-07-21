import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestComponent} from './test/test.component';
import {AlertModule} from 'ngx-bootstrap';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NavbarTopComponent} from './component/NavbarTop/navbar-top.component';
import {SharedModule} from './shared/shared.module';
import {GrandientDirective} from './Directive/gradient.directive';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {FooterBottomComponent} from './component/FooterBottom/footer-bottom.component';
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from 'ng2-translate';
import {MnFullpageModule} from 'ngx-fullpage';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarTopComponent,
    GrandientDirective,
    FooterBottomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
