import { Component } from '@angular/core';
import { BusService } from '../../bus.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  fromLocation = '';
  toLocation = '';
  date: string | null = null; // Change the type to string
  searchResults: any[] = []; // Using any[] instead of a specific model

  constructor(private busService: BusService) {}

  onDateChange(event: any) {
    // Convert the date to the required format (YYYY-MM-DD)
    const selectedDate = new Date(event.target.value);
    const year = selectedDate.getFullYear();
    const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
    const day = ('0' + selectedDate.getDate()).slice(-2);
    this.date = `${year}-${month}-${day}`;
  }

  search() {
    if (this.date) {
      this.busService.searchBuses(this.fromLocation, this.toLocation, this.date)
        .subscribe(
          (data: any[]) => {
            this.searchResults = data;
          },
          (error: any) => {
            console.error('Error fetching search results:', error);
          }
        );
    } else {
      console.error('Invalid date:', this.date);
    }
  }
}
