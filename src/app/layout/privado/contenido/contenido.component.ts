import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/data.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  public objetounico:any = {};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);
    console.log("mi objeto",this.objetounico);//información de cliente
    this.sendDataToBackend();
  }

  private decodificarJwt(token:string):any
  {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  sendDataToBackend() {
    this.dataService.sendData(this.objetounico)
      .subscribe(() => console.log('Objeto enviado al backend'));
  }
}
