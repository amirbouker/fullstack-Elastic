import { BaseInterfaceRepository } from "@repositories/base/base.interface.repository";
import { Reservation } from "@components/reservation/entity/reservation.entity";

export interface ReservationRepositoryInterface
  extends BaseInterfaceRepository<Reservation> {}
