/**
 * Created by zimo on 2017/4/30.
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {UploadOrder} from '../../../model/upload-order';
import {url} from '../../../model/global';
import {Observable} from 'rxjs/Rx';

const uploadOrderUrl = url + '/owap/public/index.php/uploadOrder';
@Injectable()
export class UserCustomService {
  headers: Headers;
  options: RequestOptions;
  constructor(public _http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  userCustomToPost(order: UploadOrder) {
    let body = JSON.stringify(order);
    return this._http.post(url, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return res;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
