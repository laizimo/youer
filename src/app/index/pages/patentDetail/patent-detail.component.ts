/**
 * Created by zimo on 2017/4/23.
 */
import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-patent-detail',
  templateUrl: './patent-detail.html',
  styleUrls: ['./patent-detail.css']
})
export class PatentDetailComponent implements OnInit {
  public id= 1;
  public srcImage: string;
  public srcImageZoom: string;
  public srcImages = [
    'assets/images/tuijian1.jpg',
    'assets/images/tuijian2.jpg',
    'assets/images/tuijian3.jpg'
  ];

  constructor(
    public router: Router,
    domSanitizer: DomSanitizer,
    mdIconRegistry: MdIconRegistry,
  ) {
    this.srcImage = 'assets/images/tuijian1.jpg';
    this.srcImageZoom = 'assets/images/tuijian1.jpg';

    mdIconRegistry.addSvgIcon('module', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/module.svg'));
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
    mdIconRegistry.addSvgIcon(
      'twitter', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
    );
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return ;
      }
      window.scrollTo(0, 0);
    });
  }

  getSrcIamgeZoom() {
    this.srcImageZoom = this.srcImage;
  }

  public changeImages(imgSrc: string) {
    this.srcImage = imgSrc;
    this.getSrcIamgeZoom();
  }
}
