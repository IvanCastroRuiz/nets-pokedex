import { Schema, SchemaFactory } from '@nestjs/mongoose'
import { Prop } from '@nestjs/mongoose/dist';
import { Document } from 'mongoose';


@Schema()
export class Pokemon extends Document  {

    @Prop({
        unique: true,
        index: true,
    })
    name: string;
    
    @Prop({
        unique: true,
        index: true,
    })
    no: number;

    url: string;
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );
