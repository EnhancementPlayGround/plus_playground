import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async getProduct(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (product === null) {
      throw new Error('The product does not exist.');
    }

    return product;
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();

    if (products === null) {
      throw new Error('The products does not exist.');
    }

    return products;
  }
}
