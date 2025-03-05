import { NgModule } from '@angular/core';
import { DetallesPageRoutingModule } from './detalles-routing.module';

import { DetallesPage } from './detalles.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DetallesPageRoutingModule
  ],
  declarations: [DetallesPage]
})
export class DetallesPageModule {}
