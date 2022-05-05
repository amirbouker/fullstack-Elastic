import { CreateAirPortDto } from "@components/airPort/dto/create-airPort.dto";
import { AirPort } from "@components/airPort/entity/airPort.entity";

export interface AirPortServiceInterface {
  create(airPortDto: CreateAirPortDto): Promise<AirPort>;

  update(airPortId: any, updateAirPort: any): Promise<AirPort>;

  search(q: any): Promise<any>;

  getAll(): Promise<AirPort[]>;
}
