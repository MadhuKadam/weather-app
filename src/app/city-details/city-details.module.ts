import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityDetailsRoutingModule } from './city-details-routing.module';
import { CityDetailsComponent } from './city-details.component';


@NgModule({
  declarations: [CityDetailsComponent],
  imports: [
    CommonModule,
    CityDetailsRoutingModule
  ]
})
export class CityDetailsModule { }
