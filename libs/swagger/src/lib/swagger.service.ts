import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './interfaces/swagger-config.interface';
import { DEFAULT_SWAGGER_CONFIG } from './constants/swagger.constants';

export class SwaggerService {
  static setup(
    app: INestApplication,
    configs: SwaggerConfig[],
    includeModules?: { [key: string]: any[] },
  ) {
    configs.forEach(config => {
      const finalConfig = { ...DEFAULT_SWAGGER_CONFIG, ...config };
      const {
        title,
        description,
        version,
        path,
        tags,
        servers,
        security,
        securitySchemes,
        include,
        basePath,
      } = finalConfig;

      const options = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version);

      if (basePath) {
        options.addServer(basePath);
      } else {
        options.addServer('/api/v1');
      }

      if (tags?.length) {
        tags.forEach(tag => options.addTag(tag));
      }

      if (servers?.length) {
        servers.forEach(server =>
          options.addServer(server.url, server.description),
        );
      }

      if (security && securitySchemes) {
        if (securitySchemes.bearer) {
          options.addBearerAuth(
            {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
              name: 'JWT',
              description: 'Enter JWT token',
              in: 'header',
            },
            'JWT-auth',
          );
        }

        if (securitySchemes.basic) {
          options.addBasicAuth();
        }

        if (securitySchemes.apiKey) {
          options.addApiKey(
            {
              type: 'apiKey',
              name: 'x-api-key',
              in: 'header',
            },
            'api-key',
          );
        }
      }

      const document = SwaggerModule.createDocument(app, options.build(), {
        include: includeModules?.[config.path] || include || [],
        deepScanRoutes: true,
        operationIdFactory: (controllerKey: string, methodKey: string) =>
          methodKey,
      });

      SwaggerModule.setup(path || 'api/docs', app, document, {
        swaggerOptions: {
          persistAuthorization: true,
          displayRequestDuration: true,
          docExpansion: 'list',
          filter: true,
          showCommonExtensions: true,
          syntaxHighlight: {
            activate: true,
            theme: 'monokai',
          },
        },
        explorer: true,
        customSiteTitle: `${title} API Documentation`,
      });
    });
  }
}
