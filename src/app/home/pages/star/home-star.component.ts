/**
 * Created by zimo on 2017/4/25.
 */
import {Component, OnInit} from '@angular/core';
import {HomeStarService} from './home-star.service';
import {abbrPatent} from '../../../model/abbr-patent.model';

@Component({
  selector: 'app-home-star',
  templateUrl: './home-star.html',
  styleUrls: ['./home-star.css']
})
export class HomeStarComponent implements OnInit {
  public patentList: Array<abbrPatent>;

  constructor(public homestarService: HomeStarService) {

  }

  ngOnInit() {
    this.getUserStar();
  }


  public getUserStar() {
    return this.homestarService.doGetUserStar()
      .subscribe(
        data => {
          this.patentList = data['data'];
          console.log(this.patentList);
        },
        error => {
          console.log(this.patentList);
        }
      );
  }
}
