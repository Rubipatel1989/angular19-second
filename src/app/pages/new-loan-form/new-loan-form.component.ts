import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-loan-form',
  imports: [ReactiveFormsModule, FormsModule,],
  templateUrl: './new-loan-form.component.html',
  styleUrl: './new-loan-form.component.css'
})
export class NewLoanFormComponent {
  loanAppForm: FormGroup = new FormGroup({});
  formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.initializeForm();
  }
  
  initializeForm() {
    this.loanAppForm = this.formBuilder.group({
      applicationID: [0],
      fullName: [''],
      applicationStatus: [''],
      panCard: [''],
      dateOfBirth: [''],
      email: [''],
      phone: [''],
      address: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      annualIncome: [''],
      employmentStatus: [''],
      creditScore: [''],
      assets: [''],
      dateApplied: [''],
      customerID: [0],
      loans: this.formBuilder.array([this.createLoanGroup()]), // Ensure at least one loan is added

    });
  }

  createLoanGroup() {
    return this.formBuilder.group({
      loanID: [0],
      applicationID: [0],
      bankName: [''],
      loanAmount: [0],
      emi: [0]
    });
  }

  get loanList(): FormArray {
    return this.loanAppForm.get('loans') as FormArray;
  }
  
}
