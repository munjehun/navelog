import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

// API Document
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Navelog API Docs')
    .setDescription('API Docs for Navelog')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // swagger api docs url
  SwaggerModule.setup('api-docs', app, document);
}
