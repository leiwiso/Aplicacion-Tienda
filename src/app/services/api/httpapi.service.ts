import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpapiService {

  constructor(private apiHttp: HttpClient) { }

  getProductos(): Observable<any> {
    return this.apiHttp.get<any>('https://fakestoreapi.com/products');
  }

  getProductoById(id: number): Observable<any> {
    return this.apiHttp.get<any>(`https://fakestoreapi.com/products/${id}`);
  }

  getCategorias(): Observable<string[]> {
    return this.apiHttp.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  getCategoriasByProdutcto(categoria: string): Observable<any>{
    return this.apiHttp.get<any>(`https://fakestoreapi.com/products/category/${categoria}`);
  }
}
