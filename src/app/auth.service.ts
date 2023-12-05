import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
 providedIn: 'root' 
})
export class AuthenticationService {

   constructor(private router: Router ) {}
 isLoggedIn = false;

 login() {
    this.isLoggedIn = true;
 
 }

 logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
 }
 isAuthenticated(): boolean {
   return this.isAuthenticated();
 }

}