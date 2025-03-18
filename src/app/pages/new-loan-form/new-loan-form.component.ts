import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      loanAmount: [''],
      loanTerm: [''],
      loanType: ['']
    });
  }
}
