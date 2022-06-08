import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalService } from './global.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { CustomValidationPipe } from './pipes/custom-validation.pipe';

@Module({
  imports: [ConfigModule],
  providers: [CustomValidationPipe, Logger, LoggingInterceptor, GlobalService],
  exports: [CustomValidationPipe, Logger, LoggingInterceptor, GlobalService],
})
export class CommonModule {}
