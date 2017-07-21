/**
 * Created by zimo on 2017/4/25.
 */
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-home-basic',
  templateUrl: './basic.html',
  styleUrls: ['./basic.css']
})
export class HomeBasicComponent {
  constructor(domSanitizer: DomSanitizer, mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIcon('end', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/end.svg'));
  }
}
