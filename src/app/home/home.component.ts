import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cities } from '../app.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cities: Cities;
  constructor(
    private appService: AppService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCities();
  }

  /**
   * for the get all cities data
   */
  getCities(): void {
    this.appService.getCities().subscribe((cities) => this.cities = cities);
  }

  /**
   * Used to open city details
   * @returns void
   */
  openCityDetails(city): void {
    this.router.navigateByUrl(`/city/${city}`);
  }

  getTimeZone(timeZone): string {
    return `+${timeZone}`;
  }
}
