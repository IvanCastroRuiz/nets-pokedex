import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JoiValidationSchema } from './config/joi.validation';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';

@Module({
  imports: [

    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),


    MongooseModule.forRoot( process.env.MONGODB_DOCKER ),
    //MongooseModule.forRoot('mongodb+srv://icastror:Sharid16*@cluster0.5uorg.mongodb.net/nest-pokemon?retryWrites=true&w=majority'),

    PokemonModule,

    CommonModule,

    SeedModule,
  ],
})
export class AppModule {

  constructor(){}

}