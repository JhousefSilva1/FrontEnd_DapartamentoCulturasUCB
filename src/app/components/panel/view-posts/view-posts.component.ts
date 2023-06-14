
import { PreviewService } from 'src/app/services/preview.service';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Swal from 'sweetalert2';
import { NonNullableFormBuilder } from '@angular/forms';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModifyPostComponent} from "./modify-post/modify-post.component";
import { data } from 'jquery';
import { ɵafterNextNavigation } from '@angular/router';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css',

  ],
  styles: [` :host {
    display: block;
    background: #fff;
    border-radius: 4px;
    padding: 16px;
    width:50vw;
    height:33vw;

  }

  `]

})

export class ViewPostsComponent   implements OnInit{
  isModify = false;
  constructor(private previewService: PreviewService, public modalService: NgbModal){
    console.log('El componente se a creado');
  }

  ngOnInit(): void {
      console.log('El componente se ha inicializado de comentarios');
      this.previewService.getById(this.solicitudId)
      .subscribe(Response => {
        this.preview = Response
        //this.getImagen(this.preview.id_imagen);
     });
      this.previewService.getHistorial(this.solicitudId)
      .subscribe(Response => {
        this.comentarios = Response
        console.log('comentarios:',this.comentarios);
      });

  }

  openModifyPostDialog(): void {
    const modalRef = this.modalService.open(ModifyPostComponent); // 3. Abre el componente ModifyPostComponent en un modal
    modalRef.componentInstance.solicitudId = this.solicitudId; // Pasamos el ID de la solicitud al componente ModifyPostComponent
    modalRef.componentInstance.preview.estado = this.preview; // Pasamos la solicitud al componente ModifyPostComponent
    modalRef.result.then(
      (result) => {
        console.log('Modal closed with result:', result);
        // Lógica para manejar el resultado del modal cuando se cierre
      },
      (reason) => {
        console.log('Modal dismissed with reason:', reason);
        // Lógica para manejar el cierre del modal cuando se descarte
      }
    );
  }

  putEstado(id:bigint,estado:number){
    console.log('aaaaaaaa'+this.preview.solicitudId);

    this.previewService.putById(this.preview.solicitudId,this.preview.estado).subscribe({
      next:() => {
        console.log('paso');

      },
      error:(errorResponse) => {
        console.log('error');
      }
    });
    console.log('post exitoso');
  }
  obtenerURLImagen(base64: string): string {
    return `data:image/jpeg;base64,${base64}`;
  }

  @Input()
  solicitudId!:bigint;

  preview: any = []


  nameInCharge!: string;
  paternalSurname!: string;
  maternalSurname!: string;
  photo!:string;
  location!:string;
  date!:Date;
  data: any = [];

  titleEvent!:string;
  descriptionEvent!: string;
  comentarios: any = [];

  onSubmit(): void {
    console.log('Formulario enviado');
    // console.log('Nombre:', this.nameInCharge);
    // console.log('Apellido Paterno:', this.paternalSurname);
    // console.log('Apellido Materno', this.maternalSurname);

  }
  // constructor(
  //   private dialogRef: DialogRef,
  // ){}

  // close(){
  //   this.dialogRef.close();

  // }

  aceptada(id:bigint){
    this.preview.solicitudId = id;
    this.preview.estado = 1;
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      icon: 'success',
      title: 'Publicación Aceptada',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }


    })
    this.putEstado(id,1);
  }
  rechazada(id:bigint){
    this.preview.solicitudId = id;
    this.preview.estado = 2;
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      icon: 'error',
      title: 'Publicación Rechazada',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }

    })
    this.putEstado(id,2);
  }

  getImagen(imagen:string){
    this.previewService.getImagen(imagen).subscribe({
      next:() => {
        this.path=data.toString;
        console.log('paso', data.toString);

      },
      error:(errorResponse) => {
        console.log('error', errorResponse);
      }
    });
    console.log('post exitoso');
    
  }

  path:any;

}
