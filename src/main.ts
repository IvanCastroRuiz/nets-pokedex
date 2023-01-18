import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');


  app.useGlobalPipes( 
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions:{
        enableImplicitConversion: true,
      }
    })
   );

  
  const config = new DocumentBuilder()
    .setTitle('Pokemon')
    .setDescription('The pokemon API description')
    .setVersion('1.0')
    .addTag('pokemon')
    .build();

 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document); 

  await app.listen( process.env.PORT );
  console.log(`App running on port ${process.env.PORT}`); 
}

bootstrap();
