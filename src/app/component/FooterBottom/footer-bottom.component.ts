/**
 * Created by zimo on 2017/4/22.
 */
import {Component} from '@angular/core';
import {flyIn} from '../../animations/flyIn';

@Component({
  selector: 'app-footer-bottom',
  templateUrl: './footer-bottom.html',
  styleUrls: ['./footer-bottom.css'],
  animations: [
    flyIn
  ]
})
export class FooterBottomComponent {

}
