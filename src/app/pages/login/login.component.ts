import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  constructor(private router: Router) {}

  onSubmit() {
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (this.user.email === parsedUser.email && this.user.password === parsedUser.password) {
        alert('Login Successful ✅');
        this.router.navigate(['/home']); // redirect to next page
      } else {
        alert('Invalid Email or Password ❌');
      }
    } else {
      alert('No user found. Please register first.');
    }
  }
}
