import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Reservation } from "./entity/reservation.entity";
import { ReservationRepositoryInterface } from "@components/reservation/interface/reservation.repository.interface";
import { ReservationRepository } from "@repositories/reservation.repository";
import { ReservationServiceInterface } from "@components/reservation/interface/reservation.service.interface";
import { ReservationController } from "@components/reservation/reservation.controller";
import { ReservationService } from "@components/reservation/reservation.service";
import { SearchService } from "@services/search/search.service";
import { SearchServiceInterface } from "@services/search/interface/search.service.interface";

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  providers: [
    {
      provide: "ReservationRepositoryInterface",
      useClass: ReservationRepository,
    },
    {
      provide: "ReservationServiceInterface",
      useClass: ReservationService,
    },
    {
      provide: "SearchServiceInterface",
      useClass: SearchService,
    },
  ],
  controllers: [ReservationController],
})
export class ReservationModule {}
