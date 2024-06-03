import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  user: any;
  loading = true;
  error: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      data => {
        this.user = data;
        this.loading = false;
      },
      err => {
        this.error = 'Failed to fetch user profile';
        this.loading = false;
      }
    );
  }
}
