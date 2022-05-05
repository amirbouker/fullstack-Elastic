import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Flight } from "./entity/flight.entity";
import { FlightRepositoryInterface } from "@components/flight/interface/flight.repository.interface";
import { FlightRepository } from "@repositories/flight.repository";
import { FlightServiceInterface } from "@components/flight/interface/flight.service.interface";
import { FlightController } from "@components/flight/flight.controller";
import { FlightService } from "@components/flight/flight.service";
import { SearchService } from "@services/search/search.service";
import { SearchServiceInterface } from "@services/search/interface/search.service.interface";

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  providers: [
    {
      provide: "FlightRepositoryInterface",
      useClass: FlightRepository,
    },
    {
      provide: "FlightServiceInterface",
      useClass: FlightService,
    },
    {
      provide: "SearchServiceInterface",
      useClass: SearchService,
    },
  ],
  controllers: [FlightController],
})
export class FlightModule {}
