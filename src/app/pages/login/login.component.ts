import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add ReactiveFormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
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
  router = inject(Router);
  changeView() {
    this.showRegisterForm.set(!this.showRegisterForm());
  }
  login() {
    const formValue = this.loginForm.value;
    this.http.post('https://projectapi.gerasim.in/api/BankLoan/Login', formValue).subscribe((res: any) => {
      if (res.result) {
        alert("Login Successful");
        sessionStorage.setItem('bankUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/application-list');
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