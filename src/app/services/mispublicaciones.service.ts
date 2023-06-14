import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MispublicacionesService {

  constructor( private http:HttpClient) {
    console.log('Servicio HTTP:');
  }

  getModificaciones(id: number){
    return this.http.get('http://localhost:8080/solicitud/mispublicaciones/'+id);
  }

  public updatePost(id: bigint, comentario: string) {
    return this.http.post(`http://localhost:8080/solicitud/comentario/${id}`, {comentario: comentario});
    return this.http.post(`http://localhost:8080/solicitud/comentario/${id}`, {estado: '2'});
  }

  public getById(id: bigint){
    return this.http.get('http://localhost:8080/eventosol/'+id);
  }

  public putById(id: bigint, estado : number){
    return this.http.put('http://localhost:8080/solicitud/'+id,{estado: estado});
  }




}
