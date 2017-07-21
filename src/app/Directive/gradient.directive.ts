/**
 * Created by zimo on 2017/4/21.
 */
import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({selector: '[gradient]'})
export class GrandientDirective {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.doShow();
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.doShow();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.doWeight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.doLight();
  }

  public doShow() {
    const t = document.body.scrollTop;
    if (t > 20) {
      this.el.style.backgroundColor = '#333';
    }else {
      this.el.style.backgroundColor = '';
    }
  }

  public doWeight() {
    const  t = document.body.scrollTop;
    if (t > 0) {
      this.el.style.backgroundColor = '#333';
    }else {
      this.el.style.backgroundColor = '#333';
    }
  }

  public doLight() {
    const  t = document.body.scrollTop;
    if (t > 0) {
      this.el.style.backgroundColor = '#333';
    }else {
      this.el.style.backgroundColor = '';
    }
  }
}
