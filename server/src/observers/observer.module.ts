import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AirPort } from "@components/airPort/entity/airPort.entity";
import { SearchService } from "@services/search/search.service";
import { AirPortElasticIndex } from "@services/search/search-index/airPort.elastic.index";
import { SearchServiceInterface } from "@services/search/interface/search.service.interface";
import { AirPortSubscriber } from "@observers/subscribers/airPort.subscriber";

@Module({
  imports: [TypeOrmModule.forFeature([AirPort])],
  providers: [
    {
      provide: "SearchServiceInterface",
      useClass: SearchService,
    },
    AirPortElasticIndex,
    AirPortSubscriber,
  ],
  controllers: [],
  exports: [],
})
export class ObserverModule {}
