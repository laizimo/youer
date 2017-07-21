/**
 * Created by zimo on 2017/4/24.
 */
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {url} from '../../../model/global';
import {UploadOrder} from '../../../model/upload-order';


@Component({
  selector: 'app-user-custom',
  templateUrl: './user-custom.html',
  styleUrls: ['./user-custom.css']
})
export class UserCustomComponent implements AfterViewInit, OnInit {

  public editor;
  public desc: string;
  public types = ['智能分派', '抢单' , '选择设计师'];
  public patent_type: number;
  public number = 1;
  public defaultImage = 'assets/images/upload-image.png';
  public show = 'hidden';
  public uploadOrder= new UploadOrder();

  constructor(domSanitizer: DomSanitizer, mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIcon('plus', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
    mdIconRegistry.addSvgIcon('sub', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sub.svg'));
    mdIconRegistry.addSvgIcon('delete', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete2.svg'));
  }

  ngOnInit() {
    this.uploadOrder.material = 0;
    this.uploadOrder.size = 0;
    this.uploadOrder.address = '浙江省杭州市西湖区留下街道浙江工业大学屏峰校区228号';
    this.uploadOrder.number = 1;
    this.uploadOrder.totalPrice = (199 + 100 * this.uploadOrder.size + 33 * this.uploadOrder.material) * this.uploadOrder.number;
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#order_editor',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
      ],
      skin_url: '/assets/skins/lightgray',
      toolbar1: 'insertfile undo redo | styleselect | bol italic | alignleft aligncenter alignright alignjustify| link',
      toolbar2: 'print preview media | forecolor backcolor| codesample',
      image_advtab: true,
      codesample_content_css: '/assets/css/prism.css',
      file_browser_callback_types: 'image',
      file_browser_callback: function (field_name, url, type, win) {
        console.log(type);
        console.log(type === 'image');
        if (type === 'image') {
          const event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
          const fileInput = document.getElementById('img_input');
          fileInput.dispatchEvent(event);
        }
      },
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.uploadOrder.description = content;
          console.log(content);
        });
      }
    });
  }

  public changeType(type: number) {
    this.uploadOrder.type = type;
    console.log(this.patent_type);
  }

  public changeAddress() {
    console.log('改变收货地址');
  }

  public changeImage() {
    const fileElem = document.getElementById('fileElem');
    if (fileElem) {
      fileElem.click();
    }else {
      console.log('error');
    }
  }

  public getImage() {
    const that = this;
    console.log('有图片');
    const Image = <HTMLImageElement>document.getElementById('fileSelect');
    const fileElem = <HTMLInputElement>document.getElementById('fileElem');
    const files = fileElem.files;
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url + '/owap/public/index.php/editorImage');
    xhr.onload = function () {
      let json;
      if (xhr.status !== 200) {
        console.log('HTTP Error' + xhr.status);
        return;
      }
      json = JSON.parse(xhr.responseText);
      if (!json || typeof json.location !== 'string') {
        console.log('Invalid JSON: ' + xhr.responseText);
        return;
      }
      console.log(json.location);
      const location = json.location;
      console.log(location);
      that.defaultImage = url + location;
      that.show = 'visible';
      fileElem.value = '';
    };
    xhr.send(formData);
  }

  public deleteImage() {
    this.defaultImage = 'assets/images/upload-image.png';
    this.show = 'hidden';
  }

  public changeMaterial(material: number) {
    this.uploadOrder.material = material;
    this.uploadOrder.unitPrice = 199 + 100 * this.uploadOrder.size + 33 * this.uploadOrder.material;
    this.uploadOrder.totalPrice = (199 + 100 * this.uploadOrder.size + 33 * this.uploadOrder.material) * this.uploadOrder.number;
  }

  public changeSize(size: number) {
    this.uploadOrder.size = size;
    this.uploadOrder.unitPrice = 199 + 100 * this.uploadOrder.size + 33 * this.uploadOrder.material;
    this.uploadOrder.totalPrice = (199 + 100 * this.uploadOrder.size + 33 * this.uploadOrder.material) * this.uploadOrder.number;
  }

  public addNumber() {
    this.uploadOrder.number = this.uploadOrder.number + 1;
    this.uploadOrder.totalPrice = (199 + 100 * this.uploadOrder.size + 33 * this.uploadOrder.material) * this.uploadOrder.number;
  }

  public subNumber() {
    this.uploadOrder.number = this.uploadOrder.number - 1;
    this.uploadOrder.totalPrice = (199 + 100 * this.uploadOrder.size + 33 * this.uploadOrder.material) * this.uploadOrder.number;
  }

  public submit() {
    console.log(this.uploadOrder);
  }
}
