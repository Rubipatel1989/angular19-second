import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showRegisterForm = signal<boolean>(false);

  changeView() {
    this.showRegisterForm.set(!this.showRegisterForm());
  }
}
