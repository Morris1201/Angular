import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [HeaderComponent, FooterComponent, NzLayoutModule, NzDropDownModule, NzIconModule, CommonModule]
})
export class LayoutComponent implements OnInit {
  classObj: object={
    name: '小程序A計畫',
    teacher: "Tom老師",
    link: 'https://www.sikiedu.com/classroom/15/introduction'
  }

  constructor() { }

  ngOnInit() {
  }

}
