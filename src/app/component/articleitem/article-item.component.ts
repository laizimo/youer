/**
 * Created by zimo on 2017/4/26.
 */
import {Component, Input} from '@angular/core';
import {Article} from '../../model/article.model';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.html',
  styleUrls: ['./article-item.css']
})
export class ArticleItemComponent {
  @Input() article: Article;
  constructor(domSanitizer: DomSanitizer, mdIconResgistry: MdIconRegistry) {
    mdIconResgistry.addSvgIcon('look', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/look.svg'));
    mdIconResgistry.addSvgIcon('like', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/like.svg'));
    mdIconResgistry.addSvgIcon('pinglun', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/pinglun.svg'));
  }
}
