import { StatusMonitorConfiguration } from "nestjs-status-monitor";

export class ConfigMonitor {
  public static monitorConfig(): StatusMonitorConfiguration {
    return {
      title: "NestJS Monitoring Page",
      port: 3002,
      socketPath: "/socket.io",
      path: "/status",
      ignoreStartsWith: "/admin",
      healthChecks: [
        {
          protocol: "http",
          host: "localhost",
          path: "monitor/alive",
          port: 3002,
        },
        {
          protocol: "http",
          host: "localhost",
          path: "monitor/dead",
          port: 3002,
        },
      ],
      spans: [
        {
          interval: 1, // Every second
          retention: 60, // Keep 60 datapoints in memory
        },
        {
          interval: 5, // Every 5 seconds
          retention: 60,
        },
        {
          interval: 15, // Every 15 seconds
          retention: 60,
        },
      ],
      chartVisibility: {
        cpu: true,
        mem: true,
        load: true,
        responseTime: true,
        rps: true,
        statusCodes: true,
      },
    };
  }
}
