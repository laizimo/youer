/**
 * Created by zimo on 2017/4/22.
 */
import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
  animations: [
    trigger('dong', [
      state('void', style({
        'bottom' : '30px'
      })),
      state('go', style({
        'bottom' : '60px'
      })),
      transition('void => go', animate('.5s')),
      transition('* => *', animate('.5s'))
    ]),
    trigger('out', [
      state('change', style({
        'transform': 'translateY(-100vh)'
      })),
      state('void', style({
        'transform': 'translateY(0)'
      })),
      transition('* => *', animate('1s'))
    ]),
    trigger('content', [
      state('in', style({
        'transform': 'translateY(0)'
      })),
      state('void', style({
        'transform' : 'translateY(100vh)'
      })),
      transition('void => in', animate('1s'))
    ])
  ]
})
export class IndexComponent implements OnInit, AfterContentChecked {
  public height: string;
  public state = 'go';
  public header_state = 'void';
  public content_state = 'void';
  public stateList= ['go', 'void'];
  constructor(domSanitizer: DomSanitizer, mdIconRegistry: MdIconRegistry, public router: Router) {
    mdIconRegistry.addSvgIcon('down', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/updown.svg'));
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return ;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterContentChecked() {
    setTimeout(this.doChange(), 500);
  }

  public doChange() {
    if (this.state === 'go') {
      this.state = 'void';
    }else {
      this.state = 'go';
    }
  }

  public down() {
    this.header_state = 'change';
    document.getElementById('content').style.visibility = 'visible';
    this.content_state = 'in';
  }
}
