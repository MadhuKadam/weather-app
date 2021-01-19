import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CityDetailsRoutingModule } from './city-details-routing.module';
import { CityDetailsComponent } from './city-details.component';


@NgModule({
  declarations: [CityDetailsComponent],
  imports: [
    CommonModule,
    CityDetailsRoutingModule
  ],
  providers: [DatePipe]
})
export class CityDetailsModule { }
