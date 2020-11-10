import { Injectable } from "@angular/core";
import { Producto } from '../objetos/producto';
import { PRODUCTOS } from '../objetos/mock/mockProductos'

@Injectable()
export class ProductService {

    productos: Producto[] = PRODUCTOS;

    constructor() { }

    allProducts(): Producto[] {
        console.log("get all Products");
        return this.productos;
    }

    product(posicion: number) : Producto {
        console.log("get product");
        return this.productos[posicion];
    }
}