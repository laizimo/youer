/**
 * Created by zimo on 2017/4/24.
 */
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.html',
  styleUrls: ['./rank.css']
})
export class RankComponent {
  constructor(domSanitizer: DomSanitizer, mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIcon('rank', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/rank.svg'));
  }
}
