import { Module } from '@nestjs/common';
import { ProductService } from './service/product.service';
import { ProductController } from './controller/product.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { ProductRepository } from './repository/product.repository';

@Module({
  imports: [PrismaModule],
  providers: [ProductService, ProductController, ProductRepository],
})
export class ProductModule {}
