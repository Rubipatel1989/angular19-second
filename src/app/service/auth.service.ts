import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUserSource = new BehaviorSubject<any>(null);
  loggedUser$ = this.loggedUserSource.asObservable();

  constructor() {
    const storedUser = sessionStorage.getItem('bankUser');
    if (storedUser) {
      this.loggedUserSource.next(JSON.parse(storedUser));
    }
  }

  setLoggedUser(user: any) {
    sessionStorage.setItem('bankUser', JSON.stringify(user));
    this.loggedUserSource.next(user);
  }

  logout() {
    sessionStorage.removeItem('bankUser');
    this.loggedUserSource.next(null);
  }
}
