import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  constructor(private http:HttpClient) {
    console.log('Servicio HTTP:');
   }
  public updatePost(id: bigint, comentario: string) {
    return this.http.post(`http://localhost:8080/solicitud/comentario/${id}`, {comentario: comentario, estado: '3'});
    return this.http.post(`http://localhost:8080/solicitud/comentario/${id}`, {estado: '2'});
  }


   GetSolicitud(){
    return this.http.get('http://localhost:8080/eventosol/');
   }

  //  GetById(){
  //   return this.http.get('http://localhost:8080/eventosol/');
  //  }

   public getById(id: bigint){
    return this.http.get('http://localhost:8080/eventosol/'+id);
   }

   public putById(id: bigint, estado : number){
    return this.http.put('http://localhost:8080/solicitud/'+id,{estado: estado});
   }

   public getImagen(imagen: string){
    return this.http.get('http://localhost:8080/solicitud/image2/'+imagen);
   }

   
  //  public getPersona(id: bigint){
  //   return this.http.get(this.Url+id ,
  //     { responseType: 'json' })
  //     .pipe(
  //       retry(3), // retry a failed request up to 3 times
  //       catchError(this.handleError) // then handle the error
  //     );
  // }

  public getHistorial(id: bigint){
    console.log('id: ',id);
    return this.http.get('http://localhost:8080/solicitud/comentarios/'+id);
  }
}
