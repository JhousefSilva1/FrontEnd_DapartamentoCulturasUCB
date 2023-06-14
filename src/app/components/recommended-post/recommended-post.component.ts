import { RecommendedService } from 'src/app/services/recommended.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-post',
  templateUrl: './recommended-post.component.html',
  template: '',
  styleUrls: ['./recommended-post.component.css']
})
export class RecommendedPostComponent implements OnInit{

  constructor(private recommended: RecommendedService){
    console.log('El componente se a creado');
  }


  solicitudId:string = '123465';
  objetounico:any = {};

  ngOnInit(): void{
    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);

    this.solicitudId = this.objetounico.sub;

    console.log("mi objeto: ",this.objetounico);//información de cliente//this.solicitudId= sessionStorage.getItem('token');
    console.log('El componente se ha inicializado');
      this.recommended.getRecomendaciones(this.solicitudId)
      .subscribe(Response => {
        console.log(Response);
        this.posts = Response
     });
  }

  //Datos de prueba

  posts: any = [];

  // posts = [{idPost:1,image:"https://picsum.photos/200",title:"titulo post", description:"descripcion post", fecha: "01/01/2023"},
  // {idPost:2,image:"https://picsum.photos/200",title:"titulo post2", description:"descripcion post2", fecha: "01/01/2023"},
  // {idPost:3,image:"https://picsum.photos/200",title:"titulo post3", description:"descripcion post3", fecha: "01/01/2023"},
  // {idPost:3,title:"titulo post3", description:"descripcion post3", fecha: "01/01/2023"}];
   public page!: number;


   viewPost(id:any){

    localStorage.setItem('id',JSON.stringify(id))
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
  obtenerFecha1(timestamp: Date): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}
