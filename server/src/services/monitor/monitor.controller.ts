import { Get, Controller, HttpCode } from "@nestjs/common";

@Controller("monitor")
export class MonitorController {
  @Get("alive")
  @HttpCode(200)
  alive(): string {
    return "OK";
  }

  @Get("dead")
  @HttpCode(500)
  dead(): string {
    return "DEAD";
  }
}
