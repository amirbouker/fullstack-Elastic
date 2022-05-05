import { BaseAbstractRepository } from "./base/base.abstract.repository";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ReservationRepositoryInterface } from "@components/reservation/interface/reservation.repository.interface";
import { Reservation } from "@components/reservation/entity/reservation.entity";

@Injectable()
export class ReservationRepository extends BaseAbstractRepository<Reservation>
  implements ReservationRepositoryInterface {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>
  ) {
    super(reservationRepository);
  }
}
