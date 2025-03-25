import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.css']
})
export class AuthPopupComponent {
  isRegister = false;
  token: string | null = null;

  loginData = { email: '', password: '' };
  registerData = { name: '', email: '', password: '', role: 'CLIENT' };

  constructor(private http: HttpClient, private router: Router) {}

  toggleMode() {
    this.isRegister = !this.isRegister;
  }

  onLogin() {
    this.http.post<any>('http://localhost:8080/api/auth/login', this.loginData)
      .subscribe({
        next: res => {
          localStorage.setItem('token', res.token);
          this.token = res.token;
  
          console.log('JWT Token reçu :', res.token); // 👈 affichage dans la console
          alert('Login successful!');
          this.router.navigate(['/']);
        },
        error: err => alert('Login failed!')
      });
  }
  

  onRegister() {
    this.http.post<any>('http://localhost:8080/api/users/register', this.registerData)
      .subscribe({
        next: res => {
          alert('Registered successfully!');
          this.toggleMode();
        },
        error: err => alert('Registration failed!')
      });
  }
}

