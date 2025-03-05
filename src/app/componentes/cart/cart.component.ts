import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/services/local/storage.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  standalone: false,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {

  @Input() item: any;
  @Output() removeI = new EventEmitter<any>();

  constructor(private carroServi: StorageService, private toast: ToastService) { }

  ngOnInit() {}
  
  inCountItem() {
    this.item.quantity++;
    this.carroServi.updateCarro(this.item);
  }
  
  desCountItems() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
      this.carroServi.updateCarro(this.item);
    } else {
      this.removeItem();
    }
  }

  removeItem() {
    this.carroServi.removeCart(this.item);
    this.removeI.emit(this.item);
    this.toast.toast('Producto eliminado del carrito ❌', 'danger')
  }
}
