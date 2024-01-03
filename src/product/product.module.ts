import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma/prisma.module';
import { ProductService } from './service/product.service';
import { ProductRepository } from './repository/product.repository';
import { ProductController } from './controller/product.controller';

@Module({
  imports: [PrismaModule],
  providers: [ProductService, ProductRepository, ProductController],
})
export class ProductModule {}
