import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
  
    const expired = this.isTokenExpired(token);
    if (expired) {
      this.logout(); // supprime le token expiré
    }
    return !expired;
  }
  

  logout() {
    localStorage.removeItem('token');
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000); // secondes
      return decoded.exp < now;
    } catch (e) {
      return true; // si erreur dans le token
    }
  }
}
