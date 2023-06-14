import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private http:HttpClient) {
    console.log('Servicio HTTP:');
   } 

   GetSolicitud(){
    return this.http.get('http://localhost:8080/solicitud/solpublico');
   }

   GetAudiencia(id: bigint){
    return this.http.get('http://localhost:8080/solicitud/publico/'+id);
   }
}
