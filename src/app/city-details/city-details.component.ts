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
  constructor(
    private appService: AppService,
    private activeRoute: ActivatedRoute
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
      this.city = data;
    });
  }

}
