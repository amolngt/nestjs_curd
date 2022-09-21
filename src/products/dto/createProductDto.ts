import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsOptional, IsString, MaxLength, MinLength,IsInt } from "class-validator";

export class CreateProductDto{
    @IsString()
    @MinLength(5)
    @ApiProperty()
    title: string;

    @IsString()
    @IsOptional()
    @MaxLength(30)
    @ApiProperty({required: false})
    desc: string;

    @IsInt()
    @ApiProperty({required: true})
    price : number
}