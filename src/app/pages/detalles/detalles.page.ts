import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpapiService } from 'src/app/services/api/httpapi.service';
import { StorageService } from 'src/app/services/local/storage.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  standalone: false,
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  detalles: any = {rating: {}};
  carroCount: number = 0;

  constructor(private apiHttp: HttpapiService, private activeRouter: ActivatedRoute, private carroServi: StorageService, private toast: ToastService) { }

  ngOnInit() {
    this.detallesProduc();
    this.carroServi.getCartItemCount().subscribe(count => {
      this.carroCount = count;
    }
    )
  }

  detallesProduc() {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if(id){
      this.apiHttp.getProductoById(+id).subscribe((data: string[]) => {
        this.detalles = data;
        console.log(data);
      })
    }
  }

  agregarCarro(product: any) {
    this.carroServi.addToCarro(product);
    this.toast.toast('Producto agregado al carro 🛒', 'success');
  }
}
