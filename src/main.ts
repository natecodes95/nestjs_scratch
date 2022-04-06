import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// Add function thats going to run when application starts
// bootstrap is common naming convention
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // make a request to localhost:3000, will return hi there
  await app.listen(3002);
}

bootstrap();
