import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent  implements OnInit{
  [x: string]: any;
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder , private snackBar: MatSnackBar , private router:Router) { }

  ngOnInit(): void {
    this.initLoginForm();

    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;   

      this.authenticate(username, password);
    }
  }

  private authenticate(username: string, password: string): void {
    if (username === 'admin' && password === 'admin') {
      console.log('Authentication successful!');
      this.showSnackBar('Login successful!');
      //this.router.navigate(['/home']);
    } else {
      console.log('Authentication failed. Invalid username or password.');
      // Display an error message or take appropriate action
    }
  }


  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,  
      verticalPosition: 'top'  
    });
  }
}
