import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecomendadoService {

  constructor(private http:HttpClient) {
    console.log('Servicio HTTP:');
   }


   public GetRecomendado(id: bigint){
    return this.http.get('http://localhost:8080/eventosol/rec/'+id);
   }

}

