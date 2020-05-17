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

@Controller('trips')
export class TripsController {
  @Post()
  async createTrip(@Body() createTripDto: CreateTripDto): Promise<string> {
    return 'trip was created';
  }

  @Get()
  getAllTrips(): string {
    return 'all trips';
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
