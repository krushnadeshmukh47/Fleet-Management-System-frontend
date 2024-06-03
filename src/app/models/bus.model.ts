export interface Seat {
    number: number;
    booked: boolean;
  }
  
  export interface Bus {
    _id: number;
    name: string;
    company: string;
    stops: string[];
    departureDateTime: Date;
    arrivalTime: Date;
    fare: number;
    seats: Seat[];
  }
  