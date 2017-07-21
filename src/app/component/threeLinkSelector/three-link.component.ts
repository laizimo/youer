/**
 * Created by zimo on 2017/4/25.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Http} from '@angular/http';
import {ThreeLinkAddressService} from './three-link.serivice';

@Component({
  selector: 'three-link-address',
  templateUrl: './three-link.html',
  styleUrls: ['./three-link.css']
})
export class ThreeLinkAddressComponent implements OnInit {
  @Output() provinceOut = new EventEmitter();

  public province: string;
  public city: string;
  public area: string;
  public provinData: Array<object>;
  public cityData: Array<object>;
  public areaData: Array<object>;
  public errorMessage: Error;

  constructor(
    public http: Http,
    public addAddressService: ThreeLinkAddressService
  ) {
    this.province = '-1';
    this.city = '-1';
    this.area = '-1';
    this.provinData = [];
    this.cityData = [];
    this.areaData = [];
  }

  ngOnInit() {
    this.getProviceList();
  }

  getProviceList() {
    return this.addAddressService.getProvince()
      .subscribe(
        province => {
          this.provinData = province;
          console.log(this.provinData);
        },
        error => this.errorMessage = <any>error
      );
  }

  getCityList(ProviceName: string) {
    return this.addAddressService.getCity()
      .subscribe(
        city => {
          this.cityData = city[ProviceName];
          console.log(this.cityData);
        },
        error => this.errorMessage = <any>error
      );
  }

  getAreaList(ProvinceID: string, CityID: string) {
    return this.addAddressService.getArea()
      .subscribe(
        area => {
          this.areaData = area[ProvinceID][CityID];
          console.log(this.areaData);
        },
        error => this.errorMessage = <any>error
      );
  }

  provinceChange() {
    this.provinceOut.emit(this.province);
    this.getCityList(this.province);
  }

  cityChange() {
    this.getAreaList(this.province, this.city);
  }
}
