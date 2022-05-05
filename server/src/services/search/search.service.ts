import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { SearchServiceInterface } from "@services/search/interface/search.service.interface";
import { ConfigSearch } from "@services/search/config/config.search";

@Injectable()
export class SearchService extends ElasticsearchService
  implements SearchServiceInterface<any> {
  constructor() {
    super(ConfigSearch.searchConfig(process.env.ELASTIC_SEARCH_URL));
  }

  public async insertIndex(bulkData: any): Promise<any> {
    const checkIndex = await this.indices.exists({ index: bulkData.index });
    if (checkIndex.statusCode === 404) {
      this.indices.create(
        {
          index: bulkData.index,
          body: {
            settings: {
              analysis: {
                analyzer: {
                  autocomplete_analyzer: {
                    tokenizer: "autocomplete",
                    filter: ["lowercase"],
                  },
                  autocomplete_search_analyzer: {
                    tokenizer: "keyword",
                    filter: ["lowercase"],
                  },
                },
                tokenizer: {
                  autocomplete: {
                    type: "edge_ngram",
                    min_gram: 1,
                    max_gram: 30,
                    token_chars: ["letter", "digit", "whitespace"],
                  },
                },
              },
            },
            mappings: {
              properties: {
                name: {
                  type: "text",
                  fields: {
                    complete: {
                      type: "text",
                      analyzer: "autocomplete_analyzer",
                      search_analyzer: "autocomplete_search_analyzer",
                    },
                  },
                },
                description: {
                  type: "text",
                },
                city: {
                  type: "text",
                },
                code: {
                  type: "text",
                },
              },
            },
          },
        },
        (err) => {
          if (err) {
            console.error(err);
          }
        }
      );
    }
    return this.bulk(bulkData)
      .then((res) => {
        console.log("here", res.body.items[0].index.error);
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public async updateIndex(updateData: any): Promise<any> {
    return this.update(updateData)
      .then((res) => res)
      .catch((err) => {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public async searchIndex(searchData: any): Promise<any> {
    let results = [];
    console.log(searchData);
    const { body } = await this.search(searchData);
    const hits = body.hits.hits;
    console.log("hits", body);
    hits.map((item) => {
      results.push(item._source);
    });

    return { results, total: body.hits.total.value };
  }

  public async deleteIndex(indexData: any): Promise<any> {
    return this.indices
      .delete(indexData)
      .then((res) => res)
      .catch((err) => {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public async deleteDocument(indexData: any): Promise<any> {
    return this.delete(indexData)
      .then((res) => res)
      .catch((err) => {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
}
