import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import { Vehicle } from '../../services/vehicles/vehiclesModel';
import { VehicleStats } from '../../services/vehicles/totalizedModel';

@Component({
  selector: 'vehicles-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  vehiclesList: Array<Vehicle>=[];
  vehicleTotalized: Array<VehicleStats>=[];

  constructor(private vehicles: VehiclesService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.vehicles.list().subscribe((vehiclesList) => {
      this.vehiclesList = vehiclesList;
      this.vehicleTotalized = this.vehicles.getTotalized(this.vehiclesList);
    });
  }

}
