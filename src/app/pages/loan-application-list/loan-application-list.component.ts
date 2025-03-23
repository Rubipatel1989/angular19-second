import { Component, inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IAPIResponse, IApplicationList } from '../../model/loan';

@Component({
  selector: 'app-loan-application-list',
  imports: [],
  templateUrl: './loan-application-list.component.html',
  styleUrl: './loan-application-list.component.css'
})
export class LoanApplicationListComponent {
  masterService = inject(MasterService);
  applicationList: IApplicationList[] = [];

  constructor() {
    if (this.masterService.loggedUserData.role == 'Customer') {

    } else {

    }
  }
  getCustomerApplication() {
    this.masterService.getMyApplications(this.masterService.loggedUserData.userId).subscribe((res: IAPIResponse) => {
      this.applicationList = res.data;
    }
    );
  }
  getAssignedApplications() {
    this.masterService.getApplicationAssigned(this.masterService.loggedUserData.userId).subscribe((res: IAPIResponse) => {
      this.applicationList = res.data;
    }
    );
  }
}
