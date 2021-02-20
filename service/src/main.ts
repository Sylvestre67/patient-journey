import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());

  const PORT = 3030;
  await app.listen(PORT);
  console.log(`Server listening on port ${PORT}`);
}

try {
  bootstrap();
} catch (e) {
  console.log(e); // last chance to console
}
