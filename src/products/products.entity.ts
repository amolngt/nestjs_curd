import { ApiProperty } from "@nestjs/swagger"
import {Product} from "@prisma/client"

export class ProductEntity implements Product{
    @ApiProperty()
    id: number
    @ApiProperty()
    title: string
    @ApiProperty()
    desc: string
    @ApiProperty()
    price: number
    @ApiProperty()
    createdAt: Date
    @ApiProperty()
    updatedAt: Date
}