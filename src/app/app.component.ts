import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Banking Application';
  loggedUserData: any;
  router = inject(Router);
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.loggedUser$.subscribe(user => {
      this.loggedUserData = user;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
