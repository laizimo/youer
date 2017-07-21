/**
 * Created by zimo on 2017/5/1.
 */
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.html',
  styleUrls: ['./cart-item.css']
})
export class CartItemComponent {
  public number = 1;
  constructor(domSanitizer: DomSanitizer, mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIcon('add', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
    mdIconRegistry.addSvgIcon('sub', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sub.svg'));
  }
}
