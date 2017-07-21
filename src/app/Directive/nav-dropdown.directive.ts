/**
 * Created by zimo on 2017/4/22.
 */
import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

@Directive({selector: '[navDropdown]'})
export class NavDropdownDirective {
  public el: HTMLElement;
  @Input() divName: string;

  constructor(el: ElementRef, public renderer: Renderer) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') OnMouseEnter() {
    this.doShow();
  }

  @HostListener('mouseleave') OnMouseLeave() {
    setTimeout(() => {
      this.doHidden();
    }, 100);
  }

  public doShow() {
    const div = document.documentElement.querySelector('#' + this.divName);
    this.renderer.setElementStyle(div, 'visibility', 'visible');
  }

  public doHidden() {
    const div = document.documentElement.querySelector('#' + this.divName);
    const state = div.getAttribute('state');
    if (state !== 'true') {
      this.renderer.setElementStyle(div, 'visibility', 'hidden');
    }
  }
}
