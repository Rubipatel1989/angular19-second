import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  loggedUserData: any;
  constructor() {
    const loggedData = sessionStorage.getItem('bankUser');
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
    }
  }
}
