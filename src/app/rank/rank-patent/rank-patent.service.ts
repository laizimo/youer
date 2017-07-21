/**
 * Created by zimo on 2017/4/27.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';


const RankPatentUrl = 'src/mock-data/fade-abbrPatent.json';
@Injectable()
export class RankPatentService {
  constructor(public _http: Http) {

  }

  doGetRankPatent() {
    return this._http.get(RankPatentUrl)
      .map((response: Response) => {
         const res = response.json();
         return res;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
