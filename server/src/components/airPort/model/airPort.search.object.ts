import { airPortIndex } from "../../../services/search/constant/airPort.elastic";

export class ElasticSearchBody {
  size: number;
  from: number;
  query: any;

  constructor(size: number, from: number, query: any) {
    this.size = size;
    this.from = from;
    this.query = query;
  }
}

export class AirPortSearchObject {
  public static searchObject(q: any) {
    const body = this.elasticSearchBody(q);
    return { index: airPortIndex._index, body, q };
  }

  public static elasticSearchBody(q: any): ElasticSearchBody {
    const query = {
      match: {
        "name.complete": {
          query: q,
        },
      },
    };
    return new ElasticSearchBody(10, 0, query);
  }
}
