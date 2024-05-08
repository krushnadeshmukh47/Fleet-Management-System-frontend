import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; // Initialize email property
  password: string = ''; // Initialize password property
  message: string = ''; // Initialize message property

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.message = 'Login successful!';
          this.router.navigate(['/landing']);
        },
        error => {
          console.log(error);
          this.message = 'Invalid email or password.';
        });
  }
  
}