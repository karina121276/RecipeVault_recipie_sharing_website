import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    newUser = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  };
  constructor(private router: Router) {}

  onRegister() {
    if (this.newUser.password !== this.newUser.confirmPassword) {
      alert("Passwords don't match ❌");
      return;
    }

    localStorage.setItem('user', JSON.stringify(this.newUser));

    // Get existing users from localStorage (or empty array)
    // const users = JSON.parse(localStorage.getItem('user') || '[]');

    // // Check if email already exists
    // const exists = users.some((u: any) => u.email === this.newUser.email);
    // if (exists) {
    //   alert('User already registered with this email ❌');
    //   return;
    // }

    // Add new user (exclude confirmPassword)
    // const { confirmPassword, ...userData } = this.newUser;
    // users.push(userData);

    // Save back to localStorage
    // localStorage.setItem('users', JSON.stringify(users));
    alert('Registration Successful ✅');
    this.router.navigate(['/login']);
  }
}
