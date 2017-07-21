/**
 * Created by zimo on 2017/4/16.
 */
import {Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-designer-list',
  templateUrl: './designer-list.component.html',
  styleUrls: ['./designer-list.component.css']
})
export class DesignerListComponent {
  constructor(domSanitizer: DomSanitizer, mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIcon('first', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/jinpai.svg'));
    mdIconRegistry.addSvgIcon('second', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/yinpai.svg'));
    mdIconRegistry.addSvgIcon('third', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/tongpai.svg'));
  }
}
