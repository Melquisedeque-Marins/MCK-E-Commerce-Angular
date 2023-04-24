import { Category } from "./Category";

export class Product {
   constructor() {}
   id!: number;
   name!: string;
   skuCode!: string;
   description!: string;
   price!: number;
   imgUrl!: string[];
   coverImg!: string;
   rate!: number;
   qtyReviews!: number;
   isInSale!: boolean;
   promotionalPrice!: number;
   discountValue!: number;
   categories!: Category[];
}


