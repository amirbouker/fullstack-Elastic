import { Inject, Injectable } from "@nestjs/common";
import { AirPortRepositoryInterface } from "@components/airPort/interface/airPort.repository.interface";
import { AirPortServiceInterface } from "@components/airPort/interface/airPort.service.interface";
import { CreateAirPortDto } from "@components/airPort/dto/create-airPort.dto";
import { AirPort } from "@components/airPort/entity/airPort.entity";
import { AirPortSearchObject } from "@components/airPort/model/airPort.search.object";
import { SearchServiceInterface } from "@services/search/interface/search.service.interface";
import { ObjectID } from "typeorm";

@Injectable()
export class AirPortService implements AirPortServiceInterface {
  constructor(
    @Inject("AirPortRepositoryInterface")
    private readonly airPortRepository: AirPortRepositoryInterface,
    @Inject("SearchServiceInterface")
    private readonly searchService: SearchServiceInterface<any>
  ) {}

  public async create(airPortDto: CreateAirPortDto): Promise<AirPort> {
    const airPort = new AirPort();
    airPort.id = airPortDto.id ? new ObjectID(airPortDto.id) : new ObjectID();
    airPort.name = airPortDto.name;
    airPort.description = airPortDto.description;
    airPort.city = airPortDto.city;
    airPort.code = airPortDto.code;
    return this.airPortRepository.create(airPort);
  }

  public async update(airPortId: any, updateAirPort: any): Promise<AirPort> {
    const airPort = await this.airPortRepository.findOneById(airPortId);
    airPort.name = updateAirPort.name;
    airPort.description = updateAirPort.description;
    airPort.city = updateAirPort.city;
    airPort.code = updateAirPort.code;
    return this.airPortRepository.create(airPort);
  }

  public async search(q: any): Promise<any> {
    const data = AirPortSearchObject.searchObject(q);
    return this.searchService.searchIndex(data);
  }

  public async getAll(): Promise<any> {
    return this.airPortRepository.findAll();
  }
}
