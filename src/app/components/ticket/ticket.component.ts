import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket: any;

  constructor() {}

  ngOnInit(): void {}

  getFormattedDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  downloadTicket() {
    const ticketData = `
      Bus ID: ${this.ticket.busId}
      Seat Numbers: ${this.ticket.seatNumbers.join(', ')}
      Amount: ${this.ticket.amount}
      Booking Date: ${this.getFormattedDate(this.ticket.bookingDate)}
    `;
    const blob = new Blob([ticketData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
