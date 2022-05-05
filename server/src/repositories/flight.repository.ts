import { BaseAbstractRepository } from "./base/base.abstract.repository";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { FlightRepositoryInterface } from "@components/flight/interface/flight.repository.interface";
import { Flight } from "@components/flight/entity/flight.entity";

@Injectable()
export class FlightRepository
  extends BaseAbstractRepository<Flight>
  implements FlightRepositoryInterface {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>
  ) {
    super(flightRepository);
  }
}
