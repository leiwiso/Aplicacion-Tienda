import { NgModule } from '@angular/core';
import { SummaryPageRoutingModule } from './summary-routing.module';

import { SummaryPage } from './summary.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SummaryPageRoutingModule
  ],
  declarations: [SummaryPage]
})
export class SummaryPageModule {}
