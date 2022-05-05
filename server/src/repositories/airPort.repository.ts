import { BaseAbstractRepository } from "./base/base.abstract.repository";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AirPortRepositoryInterface } from "@components/airPort/interface/airPort.repository.interface";
import { AirPort } from "@components/airPort/entity/airPort.entity";

@Injectable()
export class AirPortRepository
  extends BaseAbstractRepository<AirPort>
  implements AirPortRepositoryInterface {
  constructor(
    @InjectRepository(AirPort)
    private readonly airPortRepository: Repository<AirPort>
  ) {
    super(airPortRepository);
  }
}
