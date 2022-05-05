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
import { ReservationServiceInterface } from "@components/reservation/interface/reservation.service.interface";
import { CreateReservationDto } from "@components/reservation/dto/create-reservation.dto";
import { Reservation } from "@components/reservation/entity/reservation.entity";

@Controller("reservations")
export class ReservationController {
  constructor(
    @Inject("ReservationServiceInterface")
    private readonly reservationService: ReservationServiceInterface
  ) {}

  @Post()
  public async create(
    @Body() reservationDto: CreateReservationDto
  ): Promise<Reservation> {
    return this.reservationService.create(reservationDto);
  }

  @Patch("/:id")
  public async update(
    @Param("id") id: string,
    @Body() updateReservation: any
  ): Promise<Reservation> {
    return this.reservationService.update(id, updateReservation);
  }

  @Get("/findReservation")
  public async findReservation(@Query() query: any): Promise<Reservation> {
    return this.reservationService.findReservation(query);
  }

  @Get("/")
  public async all(): Promise<any> {
    return this.reservationService.getAll();
  }
}
