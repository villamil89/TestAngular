import { Component, OnInit } from '@angular/core';
import { Producto } from '../objetos/producto';
import { ProductService } from '../servicios/product.service';

@Component({
  selector: 'app-contenido-principal',
  templateUrl: './contenido-principal.component.html',
  styleUrls: ['./contenido-principal.component.css']
})
export class ContenidoPrincipalComponent implements OnInit {

  productos: Producto[];

  constructor(
    public _productService: ProductService
  ) { 
    this.productos = this._productService.allProducts();
  }

  ngOnInit() {
  }

}
