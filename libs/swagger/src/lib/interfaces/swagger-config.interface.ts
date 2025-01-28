// src/infrastructure/swagger/interfaces/swagger-config.interface.ts
export interface SwaggerConfig {
  title: string;
  description: string;
  version: string;
  path: string;
  basePath?: string;
  tags?: string[];
  servers?: Array<{
    url: string;
    description: string;
  }>;
  security?: boolean;
  securitySchemes?: {
    bearer?: boolean;
    basic?: boolean;
    apiKey?: boolean;
  };
  include?: any[];
}
