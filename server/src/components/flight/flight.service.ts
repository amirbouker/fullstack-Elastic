import { Inject, Injectable } from "@nestjs/common";
import { FlightRepositoryInterface } from "@components/flight/interface/flight.repository.interface";
import { FlightServiceInterface } from "@components/flight/interface/flight.service.interface";
import { CreateFlightDto } from "@components/flight/dto/create-flight.dto";
import { Flight } from "@components/flight/entity/flight.entity";
import { SearchServiceInterface } from "@services/search/interface/search.service.interface";

@Injectable()
export class FlightService implements FlightServiceInterface {
  constructor(
    @Inject("FlightRepositoryInterface")
    private readonly flightRepository: FlightRepositoryInterface,
    @Inject("SearchServiceInterface")
    private readonly searchService: SearchServiceInterface<any>
  ) {}

  public async create(flightDto: CreateFlightDto): Promise<Flight> {
    const flight = new Flight();
    flight.from = flightDto.from;
    flight.to = flightDto.to;
    flight.time = flightDto.time;
    flight.price = flightDto.price;
    return this.flightRepository.create(flight);
  }

  public async update(flightId: any, updateFlight: any): Promise<Flight> {
    const flight = await this.flightRepository.findOneById(flightId);
    flight.from = updateFlight.from;
    flight.to = updateFlight.to;
    flight.time = updateFlight.time;
    flight.price = updateFlight.price;
    return this.flightRepository.create(flight);
  }

  public async findFlight(q: any): Promise<Flight> {
    return this.flightRepository.findByCondition({ from: q.from, to: q.to });
  }

  public async getAll(): Promise<Flight[]> {
    return this.flightRepository.findAll();
  }
}
