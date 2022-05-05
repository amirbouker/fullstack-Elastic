import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AirPort } from "./entity/airPort.entity";
import { AirPortRepository } from "@repositories/airPort.repository";
import { AirPortController } from "@components/airPort/airPort.controller";
import { AirPortService } from "@components/airPort/airPort.service";
import { SearchService } from "@services/search/search.service";

@Module({
  imports: [TypeOrmModule.forFeature([AirPort])],
  providers: [
    {
      provide: "AirPortRepositoryInterface",
      useClass: AirPortRepository,
    },
    {
      provide: "AirPortServiceInterface",
      useClass: AirPortService,
    },
    {
      provide: "SearchServiceInterface",
      useClass: SearchService,
    },
  ],
  controllers: [AirPortController],
})
export class AirPortModule {}
