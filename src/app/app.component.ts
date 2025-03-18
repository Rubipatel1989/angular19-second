import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  loggedUserData: any;
  router = inject(Router);
  constructor() {
    const loggedData = sessionStorage.getItem('bankUser');
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
    }
  }

  logout() {
    sessionStorage.removeItem('bankUser');
    this.loggedUserData = null;
    this.router.navigateByUrl('/login');
  }
}
