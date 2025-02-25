import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  producto: string = '';

  constructor(private _route: ActivatedRoute) {}

  /**
   *  this._route.params es un OBSERVABLE que emite los parámetros de la ruta cada vez que cambian.
   *  subscribe(params => {...}) permite recibir los parámetros de la URL cuando el componente se carga o cuando la ruta cambia sin recargar la pagina
   *  params['id']. Se accede al parámetro llamado id de la URL y se asigna a la variable producto.
   *  ¿Por qué usamos subscribe?
   *  El uso de subscribe es importante porque Angular soporta la navegación dentro de una SPA (Single Page Application).
   *  Esto significa que si el usuario cambia de un producto a otro sin recargar la página, el subscribe detectará el cambio y actualizará el valor sin necesidad de recargar el componente.
   */
  ngOnInit(): void{
    this._route.params.subscribe(params => {
      //console.log(params['productId']);
      this.producto = params['id'];
    });
  }



}
