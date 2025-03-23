import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { IAPIResponse } from '../../model/loan';

@Component({
  selector: 'app-new-loan-form',
  imports: [ReactiveFormsModule, FormsModule,],
  templateUrl: './new-loan-form.component.html',
  styleUrl: './new-loan-form.component.css'
})
export class NewLoanFormComponent {
  loanAppForm: FormGroup = new FormGroup({});
  formBuilder = inject(FormBuilder);
  masterService = inject(MasterService);

  constructor() {
    const loggedData = sessionStorage.getItem('bankUser');
    if (!this.masterService.loggedUserData) {
      alert('Please login to continue');
      window.location.href = '/login';
    } else {
      this.initializeForm();
      this.loanAppForm.controls['customerId'].setValue(this.masterService.loggedUserData.userId);
    }
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
      dateApplied: [new Date()],
      customerId: [0],
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
  addNewLoan() {
    this.loanList.push(this.createLoanGroup());
  }
  removeLoan(index: number) {
    this.loanList.removeAt(index);
  }
  onSave() {
    console.log(this.loanAppForm.value);
    const formValue = this.loanAppForm.value;
    this.masterService.onSaveLoan(formValue).subscribe((res: IAPIResponse) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    }
    );
  }
}
