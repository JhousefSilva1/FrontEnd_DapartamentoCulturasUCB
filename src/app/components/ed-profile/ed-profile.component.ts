import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ModalInterestComponent } from './modal-interest/modal-interest.component';
import Swal from'sweetalert2';
import { ProfileService } from 'src/app/services/profile.service';
import { Timestamp } from 'rxjs';
import { DataService } from 'src/app/core/data.service';
import { EditProfile } from 'src/app/models/editProfile';

interface tipoUsuario {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-ed-profile',
  templateUrl: './ed-profile.component.html',
  styleUrls: ['./ed-profile.component.css']
})
export class EdProfileComponent implements OnInit{
  // correo: string= "ejemplo@gmail.com"
  // nombres: string= "Pedro"
  // apellidos: string= "Perez Perez"
  // genero:string= "hombre"
  // nacimiento: string= "01-01-2023"
  // carrera: string = "Ingenieria de Sistemas"
  // zona: string = "Obrajes"
  // direccion: string = " Calle 2 Nro 1"
  // telefono: string = "77788999"
  // correoPersonal: string ="personal@gmail.com"

  constructor(private matDialog:MatDialog, private profile: ProfileService, private dataService: DataService){}

  profileId:string = '';
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';


  datosPerfil2: EditProfile = new EditProfile();
  datosPerfil:any=[];

  intereses:any = [];

  datos: any = [];
  data: any = [];
  objetounico:any = {};

  carreras:any=[];
  value:any=[];

  tipoUsuarios: tipoUsuario[] = [
    {id:1,nombre:"Estudiante"},
    {id:2,nombre:"Docente"},
    {id:3,nombre:"Administrador"}];

  majorSelected="0";
  tipoSelected=0;


  ngOnInit(): void{

    

    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);

     this.profileId = this.objetounico.sub;

     console.log("mi objeto: ",this.objetounico);//información de cliente


    console.log('El componente se ha inicializado');
      this.profile.GetProfileById(this.profileId)
      .subscribe(Response => {
        
        this.datosPerfil = Response;
        this.majorSelected=this.datosPerfil.career;
        this.tipoSelected=this.datosPerfil.usertype;
     });
     

     this.profile.GetSubInteresesById(this.profileId)
      .subscribe(Response => {
        this.intereses = Response
     });

     this.profile.GetMajors()
     .subscribe(Response => {
       this.carreras = Response
       console.log(Response);
    });
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    console.log(this.verSeleccion,"  === ",this.opcionSeleccionado)
    this.verSeleccion = this.opcionSeleccionado;
    console.log(this.verSeleccion,"  === ",this.opcionSeleccionado)
}
capturar2(nombre:string) {
  // Pasamos el valor seleccionado a la variable verSeleccion
  this.verSeleccion = nombre;
  console.log(this.verSeleccion,"  === ",this.opcionSeleccionado)
}

// ShowSelected()
// {

// /* Para obtener el texto */
// var combo = document.getElementById("tipo");
// combo?.addEventListener('change',function(){
//   var selectedOption =  combo?.options[combo?.selectedIndex].value;
// })

// }




  openEdit(id:any){
    localStorage.setItem('idperfil',JSON.stringify(id))
    this.matDialog.open(ModalInterestComponent);
  }



  async confirmationPerfilUpdate(){
    Swal.fire({
      title: 'Confirmar Actualizacion',
      text: '¿Está seguro de modificar la informacion del usuario?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {

        //await this.updateProfile(profile);

        this.successUpdateProfile();
      }
    })
  }

  successUpdateProfile(){

    this.datosPerfil2.userId= this.datosPerfil.userId;
    this.datosPerfil2.googleId= this.datosPerfil.googleId;
    this.datosPerfil2.usertype=this.tipoSelected;
    this.datosPerfil2.family_name=this.datosPerfil.family_name;
    this.datosPerfil2.given_name=this.datosPerfil.given_name;
    this.datosPerfil2.hd=this.datosPerfil.hd;
    this.datosPerfil2.email=this.datosPerfil.email;
    this.datosPerfil2.picture=this.datosPerfil.picture;
    this.datosPerfil2.nickname=this.datosPerfil.nickname;
    this.datosPerfil2.birthday=this.datosPerfil.birthday;
    this.datosPerfil2.career=this.majorSelected;

    console.log(this.majorSelected);
    console.log(this.tipoSelected);
  

    this.profile.postProfile(this.profileId,this.datosPerfil2).subscribe({
      next:() => {
        console.log(this.datosPerfil2);

      },
      error:(errorResponse) => {
        console.log('error');
      }
    });
    console.log('post exitoso');

    Swal.fire({
      title: 'Exito',
      text: 'Perfil actualizado correctamente',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Ok',
    })
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
  
}
