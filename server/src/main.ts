import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { APIPrefix } from "@constant/common";
import { IoAdapter } from "@nestjs/platform-socket.io";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(APIPrefix.Version);
  app.useWebSocketAdapter(new IoAdapter(app));
  app.enableCors();
  const port = parseInt(process.env.SERVER_PORT);
  await app.listen(port);
}

bootstrap();
