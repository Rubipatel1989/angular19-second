import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponse, ILoan } from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  onSaveLoan(obj: ILoan) {
    return this.http.post<IAPIResponse>('https://projectapi.gerasim.in/api/BankLoan/AddNewApplication', obj);
  }
  getMyApplications(userId: number) {
    return this.http.get<IAPIResponse>(`https://projectapi.gerasim.in/api/BankLoan?customerId=${userId}`);
  }
  getApplicationAssigned(userId: number) {
    return this.http.get<IAPIResponse>(`https://projectapi.gerasim.in/api/BankLoan?bankEmployeeId=${userId}`);
  }
}
