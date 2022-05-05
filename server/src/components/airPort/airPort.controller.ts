import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { AirPortServiceInterface } from "@components/airPort/interface/airPort.service.interface";
import { CreateAirPortDto } from "@components/airPort/dto/create-airPort.dto";
import { AirPort } from "@components/airPort/entity/airPort.entity";

@Controller("airPorts")
export class AirPortController {
  constructor(
    @Inject("AirPortServiceInterface")
    private readonly airPortService: AirPortServiceInterface
  ) {}

  @Post()
  public async create(@Body() airPortDto: CreateAirPortDto): Promise<AirPort> {
    return this.airPortService.create(airPortDto);
  }

  @Patch("/:id")
  public async update(
    @Param("id") id: string,
    @Body() updateAirPort: any
  ): Promise<AirPort> {
    return this.airPortService.update(id, updateAirPort);
  }

  @Get("/search")
  public async search(@Query() query: any): Promise<any> {
    return this.airPortService.search(query.q);
  }

  @Get("/")
  public async all(): Promise<any> {
    return this.airPortService.getAll();
  }
}
