import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditProfile } from '../models/editProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    
  constructor(private http:HttpClient) {
    console.log('Servicio HTTP:');
   }

    public GetProfileById(id: string){
        return this.http.get('http://localhost:8080/v1/usuarios/'+id);
    }
    public GetSubInteresesById(id: string): Observable<any>{
        return this.http.get('http://localhost:8080/v1/usuarios/subintereses/'+id);
    }

    postProfile(id: string, profile: EditProfile){
      return this.http.post<Event>('http://localhost:8080/v1/usuarios/profile/'+id, profile);
    }

    public GetMajors(){
      return this.http.get('http://localhost:8080/carrera/');
  }
}