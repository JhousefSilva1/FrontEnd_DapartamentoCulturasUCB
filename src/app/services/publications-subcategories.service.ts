import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from '../models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class PublicationsSubcategoriesService { 

  constructor(private http:HttpClient) { }
  
  private apiUrlGet = 'http://localhost:8080/api/subinterest/all'; 
  // create the route for the backend to get the subcategories and put it in the model SubCategory, it has to be a list of subcategories because the backend returns a list of subcategories
  getSubCategories() {
    return this.http.get<SubCategory[]>(this.apiUrlGet);
  }
  
  // send a list of subcategories to the backend to save them in the database
  private apiUrlPost = 'http://localhost:8080/api/subinterest/save';
  postSubCategories(subCategories: SubCategory[]) {
    return this.http.post(this.apiUrlPost, subCategories);
  }
}
