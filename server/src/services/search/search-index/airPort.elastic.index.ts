import { Inject, Injectable } from "@nestjs/common";

import { SearchServiceInterface } from "@services/search/interface/search.service.interface";
import { airPortIndex } from "@services/search/constant/airPort.elastic";
import { AirPort } from "@components/airPort/entity/airPort.entity";

@Injectable()
export class AirPortElasticIndex {
  constructor(
    @Inject("SearchServiceInterface")
    private readonly searchService: SearchServiceInterface<any>
  ) {}

  public async insertAirPortDocument(airPort: AirPort): Promise<any> {
    const data = this.airPortDocument(airPort);
    console.log(data);
    return this.searchService.insertIndex(data);
  }

  public async updateAirPortDocument(airPort: AirPort): Promise<any> {
    const data = this.airPortDocument(airPort);
    await this.deleteAirPortDocument(airPort.id);
    return this.searchService.insertIndex(data);
  }

  private async deleteAirPortDocument(airPortId: number): Promise<any> {
    const data = {
      index: airPortIndex._index,
      id: airPortId.toString(),
    };
    return this.searchService.deleteDocument(data);
  }

  private bulkIndex(airPortId: number): any {
    return {
      _index: airPortIndex._index,
      _id: airPortId.toString(),
    };
  }

  private airPortDocument(airPort: AirPort): any {
    const bulk = [];
    bulk.push({
      index: this.bulkIndex(airPort.id),
    });
    bulk.push({ ...airPort });
    return {
      body: bulk,
      index: airPortIndex._index,
    };
  }
}
