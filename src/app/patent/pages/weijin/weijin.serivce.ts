/**
 * Created by zimo on 2017/4/24.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

const PatentClassifyUrl = 'src/mock-data/sijin.json';
@Injectable()
export class PatentClassifyService {
  constructor(public _http: Http) {

  }

  doGetPatentClassify() {
    return this._http.get(PatentClassifyUrl)
      .map((response: Response) => {
          const data = response.json();
          return data;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
