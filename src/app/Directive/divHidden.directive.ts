/**
 * Created by zimo on 2017/4/22.
 */
import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({selector: '[ulMouse]'})
export class UlMouseDirective {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') OnMouseEnter() {
    this.setAttr();
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.setHidden();
  }

  public setAttr() {
    this.el.setAttribute('state', 'true');
  }

  public setHidden() {
    this.el.setAttribute('state', '');
    this.el.style.visibility = 'hidden';
  }
}
