/**
 * Created by zimo on 2017/4/23.
 */
import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({selector: '[divShow]'})
export class PatentListDirective {
  private el: HTMLElement;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle(false);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle(true);
  }

  private setStyle(state: boolean) {
    this.el.querySelector('div').hidden = state;
  }
}
