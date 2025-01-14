import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auth-demo';
}
