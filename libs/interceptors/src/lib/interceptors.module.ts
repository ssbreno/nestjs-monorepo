import { Module } from '@nestjs/common';
import { LoggingModule } from './logging.module';

@Module({
  controllers: [],
  providers: [LoggingModule],
  exports: [LoggingModule],
})
export class InterceptorsModule {}
