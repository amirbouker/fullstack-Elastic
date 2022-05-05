import { Inject, Injectable } from "@nestjs/common";
import { ReservationRepositoryInterface } from "@components/reservation/interface/reservation.repository.interface";
import { ReservationServiceInterface } from "@components/reservation/interface/reservation.service.interface";
import { CreateReservationDto } from "@components/reservation/dto/create-reservation.dto";
import { Reservation } from "@components/reservation/entity/reservation.entity";
import { SearchServiceInterface } from "@services/search/interface/search.service.interface";

@Injectable()
export class ReservationService implements ReservationServiceInterface {
  constructor(
    @Inject("ReservationRepositoryInterface")
    private readonly reservationRepository: ReservationRepositoryInterface,
    @Inject("SearchServiceInterface")
    private readonly searchService: SearchServiceInterface<any>
  ) {}

  public async create(
    reservationDto: CreateReservationDto
  ): Promise<Reservation> {
    const reservation = new Reservation();
    reservation.flightId = reservationDto.flightId;
    reservation.fullName = reservationDto.fullName;
    reservation.email = reservationDto.email;
    return this.reservationRepository.create(reservation);
  }

  public async update(
    reservationId: any,
    updateReservation: any
  ): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOneById(
      reservationId
    );
    reservation.flightId = updateReservation.flightId;
    reservation.fullName = updateReservation.fullName;
    reservation.email = updateReservation.email;
    return this.reservationRepository.create(reservation);
  }

  public async findReservation(q: any): Promise<Reservation> {
    return this.reservationRepository.findByCondition({
      from: q.from,
      to: q.to,
    });
  }

  public async getAll(): Promise<Reservation[]> {
    return this.reservationRepository.findAll();
  }
}
