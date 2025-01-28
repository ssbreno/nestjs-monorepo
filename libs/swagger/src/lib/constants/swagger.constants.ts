import { SwaggerConfig } from '../interfaces/swagger-config.interface';

export const DEFAULT_SWAGGER_CONFIG: Partial<SwaggerConfig> = {
  path: 'api/docs',
  security: true,
  securitySchemes: {
    bearer: true,
    basic: false,
    apiKey: false,
  },
};
