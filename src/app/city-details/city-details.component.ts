import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {

  city;
  weather;
  constructor(
    private appService: AppService,
    private activeRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getCityByName();
  }

  getCityByName(): void {
    let city: string;
    this.activeRoute.params.subscribe(cityName => {
      city = cityName.name;
    });
    this.appService.getCityByName(city).subscribe((data) => {
      const today = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
      this.city = data.city;
      this.weather = data.list.filter((item) => {
        return this.datePipe.transform(item.dt_txt, 'dd-MM-yyyy') > today;
      });
    });
  }

}
