import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

type Tx = Prisma.ProductDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;

@Injectable()
export class ProductRepository {
  constructor(prisma: PrismaService) {
    this.prisma = prisma.product;
  }

  private readonly prisma: Tx;

  async getProduct(id: number, tx?: Tx): Promise<Product> {
    const ctx = tx ?? this.prisma;

    const product = await ctx.findUnique({
      where: {
        id: id,
      },
    });

    if (product === null) {
      throw new Error('The product does not exist.');
    }

    return product;
  }

  async getProducts(tx?: Tx): Promise<Product[]> {
    const ctx = tx ?? this.prisma;

    const products = await ctx.findMany();

    if (products === null) {
      throw new Error('The products does not exist.');
    }

    return products;
  }
}
