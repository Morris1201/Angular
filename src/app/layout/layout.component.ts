import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [HeaderComponent, FooterComponent, NzLayoutModule, NzDropDownModule, NzIconModule, CommonModule]
})
export class LayoutComponent implements OnInit {
  @ViewChild('ref')
  ref!: TemplateRef<any>
  version: String="0.0.1"

  @ViewChild('ref', {read:ViewContainerRef})
  refContainer!: ViewContainerRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // const view = this.ref.createEmbeddedView(null)
    // const element = this.ref.elementRef.nativeElement

    // view.rootNodes.forEach((node) => {
    //   element.parentNode.insertBefore(node, element.nextSibling)
    // })
    const view = this.ref.createEmbeddedView(null)
    this.refContainer.insert(view)
  }
}
