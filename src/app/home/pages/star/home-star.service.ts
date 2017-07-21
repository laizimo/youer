/**
 * Created by zimo on 2017/4/25.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';


const UserStarUrl = 'src/mock-data/fade-abbrPatent.json';
@Injectable()
export class HomeStarService {
  constructor(public _http: Http) {

  }

  doGetUserStar() {
    return this._http.get(UserStarUrl)
      .map((response: Response) => {
         const res = response.json();
         return res;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
