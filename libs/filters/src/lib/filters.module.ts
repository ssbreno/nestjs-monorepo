import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  controllers: [],
  providers: [HttpExceptionFilter],
  exports: [HttpExceptionFilter],
})
export class FiltersModule {}
