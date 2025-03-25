import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GYM';


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      if (!this.authService.isLoggedIn()) {
        this.authService.logout();
        this.router.navigate(['/']); // redirige vers l'accueil
      }
    }, 120000); // vérifie toutes les 10 secondes
  }
}
