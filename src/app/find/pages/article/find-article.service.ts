/**
 * Created by zimo on 2017/4/26.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

const ArticleUrl = 'src/mock-data/article.json';
@Injectable()
export class FindArticleService {
  constructor(public _http: Http) {

  }
  doGetArticleList() {
    return this._http.get(ArticleUrl)
      .map((response: Response) => {
         const res = response.json();
         return res;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
