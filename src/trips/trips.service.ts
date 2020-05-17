import { Injectable } from '@nestjs/common';
import { Trip } from './interfaces/trip.interface';

@Injectable()
export class TripsService {
  private readonly trips: Trip[] = [];

  create(trip: Trip): Trip {
    this.trips.push(trip);
    return trip;
  }

  findAll(): Trip[] {
    return this.trips;
  }
}
