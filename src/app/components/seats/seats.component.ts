import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../../bus.service';
import { Bus, Seat } from '../../models/bus.model';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  busId: string | null = null;
  bus: Bus | null = null;
  selectedSeats: number[] = [];
  totalFare: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private busService: BusService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.busId = params['busId'];
      this.loadBusDetails();
    });
  }

  loadBusDetails(): void {
    if (this.busId !== null) {
      this.busService.getBusDetails(this.busId).subscribe(
        (data: Bus) => {
          this.bus = data;
        },
        (error: any) => {
          console.error('Error fetching bus details:', error);
        }
      );
    }
  }

  toggleSeatSelection(seatNumber: number) {
    const index = this.selectedSeats.indexOf(seatNumber);
    if (index > -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push(seatNumber);
    }
    this.calculateTotalFare();
  }

  calculateTotalFare() {
    if (this.bus) {
      this.totalFare = this.selectedSeats.length * this.bus.fare;
    }
  }

  confirmBooking() {
    this.router.navigate(['/payment'], {
      queryParams: {
        busId: this.busId,
        seats: this.selectedSeats.join(','),
        total: this.totalFare
      }
    });
  }

  getSeats(): Seat[] {
    return this.bus?.seats || [];
  }

}
