import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDto } from "./dto/createProductDto";
import { UpdateProductDto } from "./dto/updateProductDto";

@Injectable()
export class ProductService{

    constructor( private prisma : PrismaService){}

    create(createProductDto : CreateProductDto){
        return this.prisma.product.create({ data : createProductDto});
    }

    fetchProducts(){
        return this.prisma.product.findMany({where:{}})
    }

    async getProduct(id:number){
        return this.prisma.product.findUnique({ where: {id}});
    }

    UpdateProduct(id:number, updateProductDto: UpdateProductDto){
        return this.prisma.product.update({
            where:{
                id
            },
            data : updateProductDto
        })
    }

    removeProduct(id:number){
        return this.prisma.product.delete({
            where:{id}
        })
    }   
}