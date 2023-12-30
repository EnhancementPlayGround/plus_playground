import { Controller } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { Args, Int, Query } from '@nestjs/graphql';
import { ProductService } from '../service/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Query(() => ProductDto)
  async product(
    @Args('productId', { type: () => Int })
    productId: number,
  ): Promise<ProductDto> {
    return this.productService.getProduct(productId);
  }

  @Query(() => [ProductDto])
  async products(): Promise<ProductDto[]> {
    return this.productService.getAllProducts();
  }
}
