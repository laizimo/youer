/**
 * Created by zimo on 2017/4/25.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.html',
  styleUrls: ['./setting-profile.css']
})
export class SettingProfileComponent {
  public gender: number;
  public genderList = ['不详', '男', '女'];
  public date: string;
  public address: string;

  public changeAddress(event) {
    this.address = event;
  }
}
