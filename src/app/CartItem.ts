import { Product } from "./Product";

export class CartItem {
    constructor(public product: Product){}
    price: number = this.product.price;
    quantity: number = 1;
}