import {
  Connection,
  EntitySubscriberInterface,
  InsertEvent,
  ObjectLiteral,
  UpdateEvent,
} from "typeorm";
import { AirPort } from "@components/airPort/entity/airPort.entity";
import { AirPortElasticIndex } from "@services/search/search-index/airPort.elastic.index";
import { InjectConnection } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AirPortSubscriber implements EntitySubscriberInterface<AirPort> {
  constructor(
    @InjectConnection() readonly connection: Connection,
    private readonly airPortEsIndex: AirPortElasticIndex
  ) {
    connection.subscribers.push(this);
  }

  public listenTo(): any {
    return AirPort;
  }

  public async afterInsert(event: InsertEvent<AirPort>): Promise<any> {
    return this.airPortEsIndex.insertAirPortDocument(event.entity);
  }

  public async afterUpdate(event: InsertEvent<any>): Promise<any> {
    return this.airPortEsIndex.updateAirPortDocument(event.entity);
  }
}
