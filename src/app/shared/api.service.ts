import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  editRestaurant(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor( private http:HttpClient) { }
  //Now here I will define the get post put delete 
  //create restaurant using post

  postRestaurant(data: any) {
    return this.http.post<any>("http://localhost:3000/posts",data)
    
  }

  //Get resstaurant data using Get method

  getRestaurant() {
    return this.http.get<any>("http://localhost:3000/posts")
  }

  //Update Restaurant using PUT method

updateRestaurant(data:any , id:number) {
  return this.http.put<any>("http://localhost:3000/posts"+id,data)
    
}

//Delete restaurant using DELETE method
deleteRestaurant(id:number){
  return this.http.delete<any>("http://localhost:3000/posts"+id)
}
}

