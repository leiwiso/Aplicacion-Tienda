import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/local/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{

  categoriaSelect: string = '';
  ascOdenar: string = ''
  logo: boolean = true;
  countCart: number = 0;

  constructor(private carroServi: StorageService) {}

  ngOnInit()  {

    setTimeout(() => {
      this.logo = false;
    }, 3000);
    this.carroServi.getCartItemCount().subscribe(count => {
      this.countCart = count;
    })
  }
}
