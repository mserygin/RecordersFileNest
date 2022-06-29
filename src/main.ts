import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

require("dotenv").config();

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT, () => console.log(`started on port = " ${PORT}`));
}

start();