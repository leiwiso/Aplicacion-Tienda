import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/local/storage.service';

@Component({
  standalone: false,
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {

  carroItems: any[] = [];
  precioTotal: number = 0;

  constructor(private carroServi: StorageService, private router: Router) { }

  ngOnInit() {
    this.loadCarro();
    this.carroServi.getCarro().subscribe(carro => {
      this.carroItems = carro;
      this.calculTotal();
    })
  }

  loadCarro() {
    this.carroServi.getCarro().subscribe(carro => {
      this.carroItems = carro;
      this.calculTotal();
    })
  }

  removeCarro(item: any) {
    this.carroServi.removeCart(item);
    this.loadCarro();
  }

  calculTotal() {
    this.precioTotal = this.carroItems.reduce((sum, item) => sum + item.price * (item.quantity), 0);
  }

  check() {
    this.router.navigate(['/check']);
  }
}
