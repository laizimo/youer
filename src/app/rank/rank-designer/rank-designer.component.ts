/**
 * Created by zimo on 2017/4/27.
 */
import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-rank-designer',
  templateUrl: './rank-designer.html',
  styleUrls: ['./rank-designer.css']
})
export class RankDesignerComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return ;
      }
      window.scrollTo(0, 0);
    });
  }
}
