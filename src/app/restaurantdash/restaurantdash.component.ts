import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurantdash',
  templateUrl: './restaurantdash.component.html',
  styleUrls: ['./restaurantdash.component.css']
})
export class RestaurantdashComponent implements OnInit {
 
  
  restaurentModelObj :RestaurantData = new RestaurantData;
  allRestaurantData: any;
  index : any;
data: any;
  constructor( private api:ApiService) { }

  ngOnInit(): void {
    this.getAllData();
    }
   formValue = new FormGroup ({
     name : new FormControl('' , Validators.required),
      email : new FormControl('' , [Validators.required, Validators.minLength(10)]),
      mobile: new FormControl('' , [Validators.required, Validators.minLength(5)]),
      address : new FormControl('' , [Validators.required, Validators.email]),
      services : new FormControl('' , [Validators.required])
   });
  
//Now Subscribing our data which is maped via Services....
addRestro(){
  console.log(this.formValue.value);
  this.api.postRestaurant(this.formValue.value).subscribe(res =>{
    console.log(res);
    alert("Restaurant record Added Successfully");

  },err =>{
    alert("Something went wrong!");
  })
}

//Get all Data
getAllData() {
  this.api.getRestaurant().subscribe(res =>{
    this.allRestaurantData = res;
  })
}

// Delete Records 
deleteResto(data:any) {
  this.api.deleteRestaurant(data.id).subscribe(res =>{
   alert("Restaurant Records deleted");
   this.getAllData(); // Quick refresh data
  },err=>{
    alert("Something went wrong");
  })
}

// Edit records
editResto(data:any) {
 this.formValue.controls['name'].setValue(data.name);
 this.formValue.controls['email'].setValue(data.email);
 this.formValue.controls['mobile'].setValue(data.mobile);
 this.formValue.controls['address'].setValue(data.address);
 this.formValue.controls['services'].setValue(data.services)
 
}
//Update records
updateResto(data:any) {
  console.log(this.formValue.value);
  this.api.updateRestaurant( data , data.id).subscribe(res =>{
    alert("Restaurant updated successfully..!!");
  })
}
}
