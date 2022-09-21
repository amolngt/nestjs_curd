import { Controller ,Post, Body, Get ,Param, Patch, Delete, NotFoundException, ParseIntPipe, UseFilters} from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { PrismaClientExceptionFilter } from "src/prisma-client-exception.filter";
import { CreateProductDto } from "./dto/createProductDto";
import { UpdateProductDto } from "./dto/updateProductDto";
import { ProductEntity } from "./products.entity";
import { ProductService } from "./products.service";

@Controller('products')
@ApiTags('Products')
@UseFilters(PrismaClientExceptionFilter)
export class ProductController{
    constructor(private readonly productService : ProductService){}
    @Post()
    @ApiCreatedResponse({type: ProductEntity})
    addproduct(@Body() createProductDto : CreateProductDto)  {
        return this.productService.create(createProductDto);
    }

    @Get()
    @ApiCreatedResponse({type: ProductEntity, isArray: true})
    getAllProducts(){
        return this.productService.fetchProducts()
    }

    @Get(':id')
    @ApiCreatedResponse({type: ProductEntity, isArray:true})
    async getProducts(@Param('id', ParseIntPipe) id: number){
        const p = await this.productService.getProduct(id)
        if(!p){
            return new NotFoundException(`not found ${id}`)
        }
        return p
    }

    @Patch(':id')
    @ApiCreatedResponse({type: ProductEntity})
    updateProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateProductDto : UpdateProductDto
        )  {
        return this.productService.UpdateProduct(id,updateProductDto);
    }

    @Delete(':id')
    @ApiCreatedResponse({type: ProductEntity})
    removeProduct(@Param('id', ParseIntPipe) id: number){
        return this.productService.removeProduct(id);
    }
}