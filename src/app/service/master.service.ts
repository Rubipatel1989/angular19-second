import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponse, ILoan, IUser } from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  loggedUserData!: IUser;;
  constructor(private http: HttpClient) { 
    const loggedData = sessionStorage.getItem('bankUser');
    if (!loggedData) {
      alert('Please login to continue');
      window.location.href = '/login';
    } else{
      this.loggedUserData = JSON.parse(loggedData);
    }
  }

  onSaveLoan(obj: ILoan) {
    return this.http.post<IAPIResponse>('https://projectapi.gerasim.in/api/BankLoan/AddNewApplication', obj);
  }
  getMyApplications(userId: number) {
    return this.http.get<IAPIResponse>(`https://projectapi.gerasim.in/api/BankLoan/GetMyApplications?customerId=${userId}`);
  }
  getApplicationAssigned(userId: number) {
    return this.http.get<IAPIResponse>(`https://projectapi.gerasim.in/api/BankLoan/GetApplicationAssignedToMe?bankEmployeeId=${userId}`);
  }
}
