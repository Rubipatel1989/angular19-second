import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-loan-form',
  imports: [],
  templateUrl: './new-loan-form.component.html',
  styleUrl: './new-loan-form.component.css'
})
export class NewLoanFormComponent {
  loanAppForm: FormGroup = new FormGroup({});
  formBuilder = inject(FormBuilder);

  initializeForm() {
    this.loanAppForm = this.formBuilder.group({
      applicationID: [0],
      fullName: ['', Validators.required, Validators.minLength(3)],
      applicationStatus: ['', Validators.required],
      panCard: ['', Validators.required, Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required, Validators.pattern('^[0-9]{10}$')],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required, Validators.pattern('^[0-9]{6}$')],
      annualIncome: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      employmentStatus: ['', Validators.required],
      creditScore: ['', Validators.required],
      assets: ['', Validators.required],
      dateApplied: ['', Validators.required],
      customerID: [0, Validators.required],
      Loans: this.formBuilder.array([this.createLoanGroup()]),
    });
  }

  createLoanGroup() {
    return this.formBuilder.group({
      loanID: [0],
      applicationID: [0, Validators.required],
      bankName: ['', Validators.required],
      loanAmount: [0, Validators.required],
      emi: [0, Validators.required]
    });
  }
}
