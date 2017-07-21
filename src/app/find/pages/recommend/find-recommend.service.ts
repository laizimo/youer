/**
 * Created by zimo on 2017/4/22.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";

const AbbrPatentLIstUrl = 'src/mock-data/fade-abbrPatent.json';
@Injectable()
export class FindRecommendService {

  constructor(public _http: Http) {



  }

  doGetAbbrPatentList() {
    return this._http.get(AbbrPatentLIstUrl)
      .map((response: Response) =>{
         const res = response.json();
         return res;
      })
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }
}
