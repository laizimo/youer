/**
 * Created by zimo on 2017/4/22.
 */
import {NgModule, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {abbrPatent} from '../../../model/abbr-patent.model';
import {FindRecommendService} from './find-recommend.service';

@Component({
  selector: 'app-find-commend',
  templateUrl: './recommend.html',
  styleUrls: ['./recommend.css']
})
export class FindRecommendComponent implements OnInit {
  public patentList: Array<abbrPatent>;
  public totalItems = 32;
  public currentPage = 2;
  public smallnumPages = 0;

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  constructor(
    domSenitizer: DomSanitizer,
    iconRegistry: MdIconRegistry,
    public findRecommandService: FindRecommendService
  ) {
    iconRegistry.addSvgIcon('zhuzi-icon', domSenitizer.bypassSecurityTrustResourceUrl('assets/icons/zhuzi.svg'));
    iconRegistry.addSvgIcon('search-icon', domSenitizer.bypassSecurityTrustResourceUrl('assets/icons/Search.svg'));
  }

  ngOnInit() {
    this.getAbbrPatentList();
  }

  public getAbbrPatentList() {
    this.findRecommandService.doGetAbbrPatentList()
      .subscribe(
        data => {
          this.patentList = data['data'];
          console.log(this.patentList);
        },
        error => {
          console.log(error);
        }
      );
  }
}
