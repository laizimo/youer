/**
 * Created by zimo on 2017/4/29.
 */
import {Directive, ElementRef, Input} from '@angular/core';

@Directive({selector: '[uploadImage]'})
export class UploadImageDirective {
  public el;
  @Input() defaultImage: string;
  @Input() uploadImage: string;

  constructor(elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }
}
