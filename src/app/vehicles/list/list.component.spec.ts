import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { Vehicle } from '../../services/vehicles/vehiclesModel';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let debug: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.vehiclesList = [
      new Vehicle(1, 'BMW','Z4', 'Hibrid', 2022, 100, 'Azul', 'https://bmw.com'),
      new Vehicle(2, 'BMW','Z5', 'Hibrid', 2022, 100, 'Azul', 'https://bmw.com'),
      new Vehicle(3, 'BMW','Z6', 'Hibrid', 2022, 100, 'Azul', 'https://bmw.com')
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an card element ', () => {
    // CHECK TABLE EXISTANCE
    expect(debug.query(By.css('.table')).attributes['id']).toEqual('vehicles-table');
    // CHECK ROWS EXISTANCE
    const tableRows = debug.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4);
  });
});
