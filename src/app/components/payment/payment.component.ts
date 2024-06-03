import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../../bus.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  busId: string | null = null;
  selectedSeats: number[] = [];
  totalFare: number = 0;
  paymentSuccessful: boolean = false;
  userId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.busId = params['busId'];
      this.selectedSeats = params['seats'].split(',').map(Number);
      this.totalFare = +params['total'];
      this.userId = '';
    });
  }

  processPayment() {
    setTimeout(() => {
      this.paymentSuccessful = true;
      this.bookSeats();
    }, 1000);
  }

  ticket: any = null;

  bookSeats() {
    if (this.busId !== null && this.userId !== null) {
      this.busService.bookSeats(this.busId, this.selectedSeats, this.userId, this.totalFare).subscribe(
        (response: any) => {
          if (response.success) {
            this.ticket = response.ticket;
            alert('Payment successful and seats booked!');
          } else {
            console.error('Seat booking failed:', response.message);
          }
        },
        (error: any) => {
          console.error('Error booking seats:', error);
        }
      );
    }
  }
}
