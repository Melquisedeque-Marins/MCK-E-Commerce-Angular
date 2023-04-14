import { CartItem } from './CartItem'
export class Cart {
    id:number = 0;
    cartNumber: string = '';
    items: CartItem[] = [];
    totalPrice: number = 0;
    totalCount: number = 0;
}