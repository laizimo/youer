/**
 * Created by zimo on 2017/4/24.
 */
import {Component, OnInit} from '@angular/core';
import {abbrPatent} from '../../model/abbr-patent.model';
import {PatentClassifyService} from '../../patent/pages/weijin/weijin.serivce';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {RankPatentService} from './rank-patent.service';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-rank-patent',
  templateUrl: './rank-patent.html',
  styleUrls: ['./rank-patent.css']
})
export class RankPatentComponent implements OnInit {
  public patentList: Array<abbrPatent>;

  constructor(public rankPatentService: RankPatentService, domSanitizer: DomSanitizer, mdIconRegistry: MdIconRegistry, public router: Router) {
    mdIconRegistry.addSvgIcon('first', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/jinpai.svg'));
    mdIconRegistry.addSvgIcon('second', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/yinpai.svg'));
    mdIconRegistry.addSvgIcon('third', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/tongpai.svg'));
  }

  ngOnInit() {
    this.getPatentList();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return ;
      }
      window.scrollTo(0, 0);
    });
  }

  public getPatentList() {
    return this.rankPatentService.doGetRankPatent()
      .subscribe(
        data => {
          this.patentList = data['data'];
        },
        error => {
          console.log(error);
        }
      );
  }
}
