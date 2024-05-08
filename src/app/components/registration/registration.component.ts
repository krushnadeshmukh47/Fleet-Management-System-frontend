import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  contact: string = '';
  gender: string = '';
  dob: Date | null = null;

  message: string = '';

  constructor(private registrationService: RegistrationService, private router: Router) {} // Inject Router

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match';
      return;
    }

    this.registrationService.register(this.name, this.email, this.password, this.contact, this.gender, this.dob)
      .subscribe(
        data => {
          console.log(data);
          this.message = 'Registration successful!';
        },
        error => {
          console.log(error);
          this.message = 'Registration failed. Please try again.';
        }
      );
  }
}
