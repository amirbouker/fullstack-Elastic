import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { FlightServiceInterface } from "@components/flight/interface/flight.service.interface";
import { CreateFlightDto } from "@components/flight/dto/create-flight.dto";
import { Flight } from "@components/flight/entity/flight.entity";

@Controller("flights")
export class FlightController {
  constructor(
    @Inject("FlightServiceInterface")
    private readonly flightService: FlightServiceInterface
  ) {}

  @Post()
  public async create(@Body() flightDto: CreateFlightDto): Promise<Flight> {
    return this.flightService.create(flightDto);
  }

  @Patch("/:id")
  public async update(
    @Param("id") id: string,
    @Body() updateFlight: any
  ): Promise<Flight> {
    return this.flightService.update(id, updateFlight);
  }

  @Get("/findFlight")
  public async findFlight(@Query() query: any): Promise<Flight> {
    return this.flightService.findFlight(query);
  }

  @Get("/")
  public async all(): Promise<any> {
    return this.flightService.getAll();
  }
}
