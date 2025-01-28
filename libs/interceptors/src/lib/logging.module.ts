/* istanbul ignore file */

import { Module } from '@nestjs/common';
import * as winston from 'winston';
import { nestConsoleFormat, severity } from './winston/winston.formats';
import { WinstonLogger } from './winston/winston.logger';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { IS_PRODUCTION } from './constants/env';

/**
 * Default log level.
 */
const DEFAULT_LOG_LEVEL = 'error';

@Module({
  providers: [
    {
      provide: WinstonLogger,
      useFactory: () => {
        return new WinstonLogger({
          level: process.env['LOG_LEVEL'] || DEFAULT_LOG_LEVEL,
          silent: process.env['LOG_SILENT'] === '1',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            severity({ upperCase: true }),
            IS_PRODUCTION ? winston.format.json() : nestConsoleFormat(),
          ),
          transports: [new winston.transports.Console()],
        });
      },
    },
    LoggingInterceptor,
  ],
  exports: [WinstonLogger, LoggingInterceptor],
})
export class LoggingModule {}
