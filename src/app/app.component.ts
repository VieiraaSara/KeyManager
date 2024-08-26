import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [LayoutComponent] 
})
export class AppComponent {
  title = 'KeyManager';
}
