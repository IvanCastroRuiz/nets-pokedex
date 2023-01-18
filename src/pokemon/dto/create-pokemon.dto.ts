import { IsInt, IsPositive, IsString, Min, MinLength  } from "class-validator";

export class CreatePokemonDto {

    // inInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // isString, MinLength 
    @IsString()
    @MinLength(1)
    name: string;

}
