/**
 * Created by zimo on 2017/4/26.
 */
import {Component, OnInit} from '@angular/core';
import {Article} from '../../../model/article.model';
import {FindArticleService} from './find-article.service';

@Component({
  selector: 'app-find-article',
  templateUrl: './find-article.html',
  styleUrls: ['./find-article.css']
})
export class FindArticleComponent implements OnInit {
  public articleList: Array<Article>;
  constructor(
    public findArticleService: FindArticleService
  ) {}
  ngOnInit() {
    this.getArticleList();
  }

  public getArticleList() {
    return this.findArticleService.doGetArticleList()
      .subscribe(
        data => {
          this.articleList = data['data'];
        },
        error => {
          console.log(error);
        }
      );
  }
}
