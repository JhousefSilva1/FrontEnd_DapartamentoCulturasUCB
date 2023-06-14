import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Category} from "../models/category";
import {HttpClient} from "@angular/common/http";
import { SubCategoryPost } from '../models/SubCategoryPost';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:8080/v1/intereses/mostrar');
  }

  getSubCategory(id: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/v1/intereses/mostrar/'+id);
  }

  postSubInteresrs(subInteres: SubCategoryPost){
    return this.http.post<Event>('http://localhost:8080/v1/usuarios/asignar-interes',subInteres );
  }

  // No se utiliza se puede poner la direccion directo en HTML
  getImagen(id: string){
    return this.http.get<any>('http://localhost:8080/solicitud/imagen4/'+id);
  }

}
