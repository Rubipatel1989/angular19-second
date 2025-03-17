import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showRegisterForm = signal<boolean>(false);
  customerObj: Customer = new Customer();
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });

  http = inject(HttpClient)
  changeView() {
    this.showRegisterForm.set(!this.showRegisterForm());
  }
  login() {
    this.http.post('https://projectapi.gerasim.in/api/BankLoan/Login', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert("Login Successful");
      } else {
        alert(res.message);
      }
    }, (error => {
      console.log(error);
      console.log(error.message);
      alert(error.message);
    }));
  }
  register() {
    this.http.post('https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer', this.customerObj).subscribe((res: any) => {
      if (res.result) {
        alert("Registration Successful");
      } else {
        alert(res.message);
      }
    }, (error => {
      console.log(error);
      console.log(error.message);
      alert(error.message);
    }));
  }
}




export class Customer {
  userId: number;
  userName: string;
  emailId: string;
  fullName: string;
  password: string;

  constructor() {
    this.userId = 0;
    this.userName = "";
    this.emailId = "";
    this.fullName = "";
    this.password = "";
  }
}