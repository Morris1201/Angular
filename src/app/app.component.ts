import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { LayoutModule } from './layout/layout.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule, NzDropDownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helloworld';
}
