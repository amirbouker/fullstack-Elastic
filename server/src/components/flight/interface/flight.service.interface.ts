import { CreateFlightDto } from "@components/flight/dto/create-flight.dto";
import { Flight } from "@components/flight/entity/flight.entity";

export interface FlightServiceInterface {
  create(flightDto: CreateFlightDto): Promise<Flight>;

  update(flightId: any, updateFlight: any): Promise<Flight>;

  findFlight(q: any): Promise<Flight>;

  getAll(): Promise<Flight[]>;
}
