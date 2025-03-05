import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpapiService } from 'src/app/services/api/httpapi.service';

@Component({
  standalone: false,
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  productos: any[] = [];
  @Input() categoriaSelect: string = '';
  @Input() ascDesc: string = '';

  constructor(private apiHttp: HttpapiService) { }

  ngOnInit() {
    this.cargaProductos();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['categoriaSelect']) {
      if(this.categoriaSelect) {
        this.cargaProductosByCate();
      } else {
        this.cargaProductos();
      }
    }
    if (changes['ascDesc']) {
      this.ascDesProduct();
    }
  }

  cargaProductos() {
    this.apiHttp.getProductos().subscribe((data: string[]) => {
      this.productos = data;
      this.ascDesProduct();
    })
  }

  cargaProductosByCate() {
    if (!this.categoriaSelect) return;
    this.apiHttp.getCategoriasByProdutcto(this.categoriaSelect).subscribe((data) => {
      this.productos = data;
      this.ascDesProduct();
    })
  }

  ascDesProduct() {
    if (!this.productos.length) return;

    switch (this.ascDesc) {
      case 'asc':
        this.productos.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'desc':
        this.productos.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
  }
}
