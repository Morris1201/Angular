import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';  // 引入 CommonModule

interface menuInfo{
  name:string,
  list?:menuInfo[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [FooterComponent, NzDropDownModule, NzIconModule, CommonModule]
})
export class HeaderComponent implements OnInit {
  menuList:menuInfo[] = [
    {
      name: '首頁'
    },
    {
      name: '全部課程',
      list:[
        {
          name:'所有課程'
        },
        {
          name:'課程投票-Unity'
        },
        {
          name:'課程投票-Unreal (虛幻)'
        }
      ]
    },
    {
      name:'Java',
      list:[
        {
          name:'Java全部課程'
        },
        {
          name:'Java A計畫 (永久)'
        },
        {
          name:'Java A計畫 (一年)'
        },
        {
          name:'Java學習路線'
        }
      ]
    },
    {
      name:'Python AI'
    },
    {
      name:'小程序'
    },
    {
      name:'單賣課'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
