import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehiclesModel';
import { VehicleStats } from './totalizedModel';

type vehiclesCounter = {[key: string]: number};

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  list(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(environment.vehiclesApi);
  }

  getTotalized(vehicleList: Array<Vehicle>): VehicleStats[] {
    const vehicleCounterObj: vehiclesCounter = {};
    vehicleList.forEach((vehicle: Vehicle) => {
      if (!vehicleCounterObj[vehicle.marca]) {
        vehicleCounterObj[vehicle.marca] = 0;
      }
      vehicleCounterObj[vehicle.marca] += 1;
    });
    return Object.keys(vehicleCounterObj).map((marca) => ({marca, counter: vehicleCounterObj[marca]}));
  }
}
