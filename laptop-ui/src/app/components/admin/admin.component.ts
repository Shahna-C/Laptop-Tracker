import { Component, OnInit } from '@angular/core';
import {LaptopService} from '../../services/laptop.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public laptops;
  constructor(private laptopService : LaptopService) { }

  ngOnInit() {
    this.getLaptops();
  }

  getLaptops() {
    this.laptopService.getLaptops().subscribe(
      data => {this.laptops = data},
      err => console.error(err),
      () => console.log('laptops loaded')
    );
  }

}
