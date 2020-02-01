import { NgModule } from '@angular/core';
import { SpectrumApiComponent } from './spectrum-api.component';
import { ListingsService } from './api/listings.service';
import { FbaOutboundService } from './api/fbaOutbound.service';


@NgModule({
  declarations: [SpectrumApiComponent],
  imports: [
  ],
  exports: [SpectrumApiComponent],
  providers: [
    ListingsService,
    FbaOutboundService
  ],
})
export class SpectrumApiModule { }
