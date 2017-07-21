/**
 * Created by zimo on 2017/4/22.
 */
import {Component, Input, OnInit} from '@angular/core';
import {abbrPatent} from '../../model/abbr-patent.model';

@Component({
  selector: 'app-patent-item',
  templateUrl: './patent-item.html',
  styleUrls: ['./patent-item.css']
})
export class PatentItemComponent implements OnInit {
  @Input() patent: abbrPatent;
  @Input() width: string;
  @Input() height: string;

  ngOnInit() {

  }
}
