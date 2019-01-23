import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from '../../service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

	cars: Car[];

	constructor(private carService: CarService) { }

	ngOnInit() {
		this.getCars();
	}

	getCars(): void {
		this.carService.getCars().subscribe(cars => this.cars = cars);
	}
}
