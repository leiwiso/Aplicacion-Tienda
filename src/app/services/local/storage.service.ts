import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private carro = new BehaviorSubject<any[]>(this.loadCartStorage());
  private cartCount = new BehaviorSubject<number>(0);

  constructor() { 
    this.updateCartCount();
  }

  ngOnInit() {}
  
  private loadCartStorage(): any[] {
    const carro = localStorage.getItem('carro');
    return carro ? JSON.parse(carro) : [];
  }

  getCarro(): Observable<any[]> {
    return this.carro.asObservable();
  }

  getCartItemCount(): Observable<number> {
    return this.cartCount.asObservable();
  }

  addToCarro(product: any) {
    let currentCart = this.loadCartStorage();

    if (!Array.isArray(currentCart)) {
      currentCart = [];
    }

    const existProduct = currentCart.find((p: any) => p.id === product.id);

    if (existProduct) {
      existProduct.quantity++;
    } else {
      product.quantity = 1;
      currentCart.push(product);
    }
    
    localStorage.setItem('carro', JSON.stringify(currentCart));
    this.carro.next(currentCart);
    this.updateCartCount();
    
    //this.toastS.showToast('Producto agregado al carrito', 'success');
  }
  
  removeCart(product: any) {
    let currentCart = this.loadCartStorage();

    if (!Array.isArray(currentCart)) {
      currentCart = [];
    }
    
    currentCart = currentCart.filter((p: any) => p.id !== product.id);
    this.carro.next(currentCart);
    localStorage.setItem('carro', JSON.stringify(currentCart));
    this.cartCount.next(currentCart.length)
    //this.toastS.showToast('Producto eliminado del carrito', 'danger');
  }

  private updateCartCount() {
    const currentCart = this.loadCartStorage();
    this.cartCount.next(currentCart.length);
  }

  updateCarro(product: any) {
    let currentCart = this.loadCartStorage();

    if (!Array.isArray(currentCart)) {
      currentCart = [];
    }

    const index = currentCart.findIndex((p: any) => p.id === product.id);

    if (index !== -1) {
      currentCart[index] = product;
    }

    localStorage.setItem('carro', JSON.stringify(currentCart));
    this.carro.next(currentCart);
    this.updateCartCount();
  }

  clearCarro() {
    this.carro.next([]);
    localStorage.removeItem('carro');
    this.cartCount.next(0);
  }
}
