import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getProduct(productId: number): Promise<ProductDto> {
    return await this.productRepository.getProduct(productId);
  }

  async getAllProducts(): Promise<ProductDto[]> {
    return await this.productRepository.getProducts();
  }
}
