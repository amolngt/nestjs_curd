import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateProductDto } from "./createProductDto";

export class UpdateProductDto extends PartialType(CreateProductDto){}