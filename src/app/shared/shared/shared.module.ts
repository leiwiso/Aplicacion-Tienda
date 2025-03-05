import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from 'src/app/componentes/productos/productos.component';
import { CategoriaComponent } from 'src/app/componentes/categoria/categoria.component';
import { AscComponent } from 'src/app/componentes/asc/asc.component';
import { CartComponent } from 'src/app/componentes/cart/cart.component';

const Modules = [
  CommonModule,
  IonicModule,
  FormsModule,
  RouterModule,
  RouterModule,
  ReactiveFormsModule
]

const Component = [
  ProductosComponent,
  CategoriaComponent,
  AscComponent,
  CartComponent
]


@NgModule({
  declarations: [... Component],
  imports: [
    ... Modules
  ],
  exports: [... Modules, ... Component]
})
export class SharedModule { }
