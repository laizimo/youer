import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {TranslateService} from 'ng2-translate';
import {flyIn} from './animations/flyIn';
import {User} from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    flyIn
  ]
})
export class AppComponent implements OnInit {
  public currentUser: User;
  constructor(
    domSanitizer: DomSanitizer,
    mdIconRegistry: MdIconRegistry,
    public translate: TranslateService
  ) {

    // 自定义图标部分
    mdIconRegistry.addSvgIcon(
      'facebook-icon', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    );
    mdIconRegistry.addSvgIcon(
      'github-icon', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-circle.svg')
    );
    mdIconRegistry.addSvgIcon(
      'weibo-icon', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/weibo.svg')
    );
    mdIconRegistry.addSvgIcon(
      'qq-icon', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/qqchat.svg')
    );
    mdIconRegistry.addSvgIcon(
      'twitter-icon', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
    );
    mdIconRegistry.addSvgIcon(
      'cart', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cart.svg')
    );
  }

  ngOnInit() {
    // 自定义语言部分
    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('zh');

    const browerLang = this.translate.getBrowserLang();
    this.translate.use(browerLang.match(/zh|en/) ? browerLang : 'zh');

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
