import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/objetos/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/servicios/product.service';

@Component({
  selector: 'app-contenido-uno',
  templateUrl: './contenido-uno.component.html',
  styleUrls: ['./contenido-uno.component.css']
})
export class ContenidoUnoComponent implements OnInit {

  producto: Producto;

  constructor(
    private _activedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {
    this._activedRoute.params.subscribe(data => {
      this.producto = this._productService.product(Number(data['id']));
    });
  }

  ngOnInit() {
  }

}
