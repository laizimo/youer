/**
 * Created by zimo on 2017/4/24.
 */
import {Component} from '@angular/core';
import {abbrPatent} from '../model/abbr-patent.model';

@Component({
  selector: 'app-patent',
  templateUrl: './patent.html',
  styleUrls: ['./patent.css']
})
export class PatentComponent {
  public patentList: Array<abbrPatent>;
  constructor() {

  }
}
