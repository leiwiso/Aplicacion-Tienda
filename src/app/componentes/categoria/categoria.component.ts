import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpapiService } from 'src/app/services/api/httpapi.service';

@Component({
  standalone: false,
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent  implements OnInit {

  categorias: string[] = [];
  categoriaSelec: string = '';

  @Output() categorySelected = new EventEmitter<string>();

  constructor(private apiHttp: HttpapiService) { }

  ngOnInit() {
    this.loadCategorias();
  }

  loadCategorias() {
    this.apiHttp.getCategorias().subscribe((data) => {
        this.categorias = data;
      });
  }

  selectCategoria(categoria: string){
    this.categoriaSelec = categoria;
    this.categorySelected.emit(categoria);
  }
}
