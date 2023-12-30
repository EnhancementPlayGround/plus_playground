import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductDto {
  @Field(() => ID, { nullable: false })
  id: number;
  @Field(() => String, { nullable: false })
  name: string;
  @Field(() => Int, { nullable: false })
  price: number;
  @Field(() => Int, { nullable: false })
  count: number;
  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
