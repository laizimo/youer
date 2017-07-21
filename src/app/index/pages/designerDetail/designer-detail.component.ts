/**
 * Created by zimo on 2017/4/23.
 */
import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";
import {MdIconRegistry} from "@angular/material";

@Component({
  selector: 'app-designer-detail',
  templateUrl: './designer-detail.html',
  styleUrls: ['./designer-detail.css']
})
export class DesignerDetailComponent implements OnInit {

  public tiles = [
    {text: 'assets/images/tuijian1.jpg', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'assets/images/tuijian2.jpg', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'assets/images/tuijian3.jpg', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'assets/images/tuijian4.jpg', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor(public router: Router,
              domSanitizer: DomSanitizer,
              mdIconRegistry: MdIconRegistry
  ) {
    mdIconRegistry.addSvgIcon(
      'facebook', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    );
    mdIconRegistry.addSvgIcon(
      'weixin', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/weixin.svg')
    );
    mdIconRegistry.addSvgIcon(
      'weibo', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/weibo.svg')
    );
    mdIconRegistry.addSvgIcon(
      'qq', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/qqchat.svg')
    );
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
