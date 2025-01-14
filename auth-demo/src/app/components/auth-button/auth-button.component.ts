import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  imports: [CommonModule],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.css'
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
}
