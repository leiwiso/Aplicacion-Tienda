import { NgModule } from '@angular/core';
import { CheckPageRoutingModule } from './check-routing.module';

import { CheckPage } from './check.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CheckPageRoutingModule
  ],
  declarations: [CheckPage]
})
export class CheckPageModule {}
