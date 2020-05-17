import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { CreateTripDto } from './dto/create_trip.dto';
import { TripsService } from './trips.service';
import { Trip } from './interfaces/trip.interface';

@Controller('trips')
export class TripsController {
  constructor(private tripsService: TripsService) {}
  @Post()
  async createTrip(@Body() createTripDto: CreateTripDto): Promise<Trip> {
    return this.tripsService.create(createTripDto);
  }

  @Get()
  async getAllTrips(): Promise<Trip[]> {
    return this.tripsService.findAll();
  }

  @Get('/:id')
  async getSingleTrip(@Param('id') id: string): Promise<string> {
    return `a single trip ${id}`;
  }

  @Put('/:id')
  async updateTrip(@Param('id') id: string): Promise<string> {
    return `a single trip ${id} was updated`;
  }

  @Delete('/:id')
  async deleteTrip(@Param('id') id: string): Promise<string> {
    return `a single trip ${id} was deleted`;
  }
}
