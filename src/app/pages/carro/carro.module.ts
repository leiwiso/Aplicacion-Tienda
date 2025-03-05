import { NgModule } from '@angular/core';
import { CarroPageRoutingModule } from './carro-routing.module';

import { CarroPage } from './carro.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CarroPageRoutingModule
  ],
  declarations: [CarroPage]
})
export class CarroPageModule {}
