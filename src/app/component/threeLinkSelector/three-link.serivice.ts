/**
 * Created by zimo on 2017/4/25.
 */
import { Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';


const ProvinceUrl = `src/mock-data/province.json`;
const CityUrl = `src/mock-data/city.json`;
const AreaUrl = `src/mock-data/area.json`;
@Injectable()
export class ThreeLinkAddressService {
  constructor(private _http: Http) {}

  getProvince(): Observable<any[]> {
    return this._http.get(ProvinceUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCity(): Observable<any[]> {
    return this._http.get(CityUrl)
      .map((response: Response) => {
        const city = response.json();
        return city;
      })
      .catch(this.handleError);
  }

  getArea(): Observable<any[]> {
    return this._http.get(AreaUrl)
      .map((response: Response) => {
        const area = response.json();
        return area;
      })
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const province = res.json();
    return province;
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message : (error.status ? `${error.status} - ${error.statusText}` : 'Server error');
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
