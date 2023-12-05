import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(route: any, state: RouterStateSnapshot): Observable<boolean> {
    // Replace this with your actual authentication check logic
    const isAuthenticated = this.authService.isAuthenticated(); // Adjust accordingly

    if (isAuthenticated) {
      return of(true); // User is authenticated
    } else {
      this.router.navigate(['/login']);
      return of(false); // User is not authenticated
    }
  }
}
