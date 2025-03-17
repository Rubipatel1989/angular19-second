import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showRegisterForm = signal<boolean>(false);
  customerObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": "",
  };
  changeView() {
    this.showRegisterForm.set(!this.showRegisterForm());
  }
}
