import { BaseInterfaceRepository } from "@repositories/base/base.interface.repository";
import { Flight } from "@components/flight/entity/flight.entity";

export interface FlightRepositoryInterface
  extends BaseInterfaceRepository<Flight> {}
