/**
 * Created by zimo on 2017/4/24.
 */
import {Component, OnInit} from '@angular/core';
import {abbrPatent} from '../../../model/abbr-patent.model';
import {PatentClassifyService} from './weijin.serivce';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-patent-classify',
  templateUrl: './weijin.html',
  styleUrls: ['./weijin.css']
})
export class WeiJinComponent implements OnInit {
  public patentList: Array<abbrPatent>;

  constructor(public patentClassifyService: PatentClassifyService, public router: Router) {

  }

  ngOnInit() {
    this.getPatentClassify();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return ;
      }
      window.scrollTo(0, 0);
    });
  }

  public getPatentClassify() {
    return this.patentClassifyService.doGetPatentClassify()
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
