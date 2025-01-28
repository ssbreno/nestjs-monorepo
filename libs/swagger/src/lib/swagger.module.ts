import { Module } from '@nestjs/common';
import { SwaggerService } from './swagger.service';

@Module({
  controllers: [],
  providers: [SwaggerService],
  exports: [SwaggerService],
})
export class SwaggerModule {}
