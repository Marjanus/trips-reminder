import { Module } from '@nestjs/common';
import { TripsController } from './trips/trips.controller';

@Module({
  imports: [],
  controllers: [TripsController],
  providers: [],
})
export class AppModule {}
