import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import logger from './app/common/logger';
import { CustomValidationPipe } from './app/common/pipes/custom-validation.pipe';

process.on('uncaughtException', (error) => {
  logger.error(error);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new CustomValidationPipe());

  await app.listen(process.env.SERVER_PORT);
  if (process.env.NODE_ENV === 'test') {
    setTimeout(() => {
      app.close();
    }, 5000);
  }
}
bootstrap();
