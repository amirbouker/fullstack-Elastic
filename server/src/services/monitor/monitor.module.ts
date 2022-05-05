import { Module } from "@nestjs/common";
import { StatusMonitorModule } from "nestjs-status-monitor";
import { ConfigMonitor } from "./config/config.monitor";

import { MonitorController } from "./monitor.controller";

@Module({
  imports: [StatusMonitorModule.forRoot(ConfigMonitor.monitorConfig())],
  controllers: [MonitorController],
  providers: [],
})
export class MonitorModule {}
