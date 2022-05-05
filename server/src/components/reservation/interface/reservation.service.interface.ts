import { CreateReservationDto } from "@components/reservation/dto/create-reservation.dto";
import { Reservation } from "@components/reservation/entity/reservation.entity";

export interface ReservationServiceInterface {
  create(reservationDto: CreateReservationDto): Promise<Reservation>;

  update(reservationId: any, updateReservation: any): Promise<Reservation>;

  findReservation(q: any): Promise<Reservation>;

  getAll(): Promise<Reservation[]>;
}
