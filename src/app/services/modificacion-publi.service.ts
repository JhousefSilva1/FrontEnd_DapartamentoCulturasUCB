import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificacionPubliService {

  constructor(private http: HttpClient) { }

  putPublicacion(publicacion: any[]){
    return this.http.put('http://localhost:8080/eventosol/editmodevento', publicacion);
   }
}
