import { Component, OnInit } from '@angular/core';
import {LaptopService} from '../../services/laptop.service';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs/'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Sony Vaio - Notebook', 
    'Apple - Macbook Pro',
    'Asus - ZenBook',
  ];
  laptopform: FormGroup;
  validMessage: string = "";
  constructor(private laptopService: LaptopService)  { }

  ngOnInit() {
    this.laptopform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if (this.laptopform.valid) {
      this.validMessage = "Your laptop registration has been submitted. Thank you!";
      this.laptopService.createLaptopRegistration(this.laptopform.value).subscribe(
        data => {
          this.laptopform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
        
      )
  
   } else {
      this.validMessage = "Please fill out the form before submitting!";
   }
 }

}
