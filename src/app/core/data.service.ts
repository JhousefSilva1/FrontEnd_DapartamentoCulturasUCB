import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  sendData(objetounico: any) {
    const url = 'http://localhost:8080/v1/usuarios/create';
    console.log('enviando datos');
    return this.http.post(url, objetounico);
  }
}
