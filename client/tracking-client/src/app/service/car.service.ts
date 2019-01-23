import { Injectable } from '@angular/core';
import { Car } from '../component/car/car';
import { CARS } from '../mock-service-data/mock-car';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

	constructor() { }

	getCars(): Observable<Car[]>{
		return of(CARS); 
	}

	getCar(id: string): Observable<Car>{
		return of(CARS.find(car => car.id === id));
	}
}
