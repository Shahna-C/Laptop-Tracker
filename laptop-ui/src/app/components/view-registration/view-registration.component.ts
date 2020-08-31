import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../../services/laptop.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
   
  public laptopReg;

  constructor(private laptopService: LaptopService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getLaptopReg(this.route.snapshot.params.id);
  }

  getLaptopReg(id:number) {
    this.laptopService.getLaptop(id).subscribe(
      data => {
        this.laptopReg = data;
      },
      err => console.error(err),
      () => console.log('laptops loaded')
    );
  }

}
