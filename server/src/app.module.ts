import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ormConfig } from "@database/config/ormconfig";
import { AirPortModule } from "@components/airPort/airPort.module";
import { SearchModule } from "@services/search/search.module";
import { ObserverModule } from "@observers/observer.module";
import { FlightModule } from "@components/flight/flight.module";
import { MonitorModule } from "@services/monitor/monitor.module";
import { ReservationModule } from "@components/reservation/reservation.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    AirPortModule,
    FlightModule,
    ReservationModule,
    SearchModule,
    ObserverModule,
    MonitorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
