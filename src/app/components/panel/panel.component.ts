import { PanelService } from 'src/app/services/panel.service';
//import { BackendService } from './services/backend.service';
import { Component, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
//import {TodoDialogComponent} from '../../components/todo-dialog/todo-dialog.component'
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { bottom } from '@popperjs/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NativeDateAdapter } from '@angular/material/core';



// export class FilterComponent {
//   acceptar: boolean = false;
//   rechazar: boolean = false;

//   constructor(private backendService : BackendService) {}

//   updateFilter() {
//     this.backendService.updateFilter(this.acceptar, this.rechazar).subscribe();
//   }
// }
interface Solicitud {
  numero: number;
  nombre: string;
  asunto: string;
  fecha: Date;
  hora: string;
  // referencia: 'Ver detalles de la publicacion';
  referencia: string;
  estados: 'Rechazado' | 'Aprobado' | 'Pendiente' | 'Enviado';
}


interface Detalle{
  id:bigint;
  numero: number;
  nombre: string;
  asunto: string;
  fecha: Date;
  hora: string;
  estado: 'Rechazado' | 'Aprobado' | 'Pendiente'| 'Enviado';
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',

  styleUrls: ['./panel.component.css'],
  // template: `
  //   <button class="btn-view-Detail" (click)="openPopup()">Ver Detalle</button>
  // `
})


export class PanelComponent implements OnInit{
  selectedDateRange: any;

  public selectedStartDate: Date = new Date();
  public selectedEndDate: Date = new Date();


  // openPopup() {
  //   const dialogRef = this.dialog.open(Component);
  // }
  public page!: number;
  audiencias: any = [];

  constructor(private panelService: PanelService, private dialog2: Dialog){
    console.log('El componente se a creado');
  }


  ngOnInit(): void {
      console.log('El componente se ha inicializado');
      this.sortTable('solicitudid');
      this.panelService.GetSolicitud()
      .subscribe(Response => {
        this.solicitudes = Response;
        this.solicitudes_aprobadas = this.solicitudes.filter((solicitud: { estado: number; }) => solicitud.estado === 1);
        this.solicitudes_rechazadas = this.solicitudes.filter((solicitud: { estado: number; }) => solicitud.estado === 2);
        this.solicitudes_pendientes = this.solicitudes.filter((solicitud: { estado: number; }) => solicitud.estado === 0);
        this.solicitudes = this.solicitudes_aprobadas
        console.log(this.solicitudes_aprobadas)
     });
  }
  // Definir la propiedad 'sortDirection' en el componente
  sortColumn: string = 'solicitudid';
  sortDirection: string = 'asc';

// Función para cambiar la dirección del ordenamiento
  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

// Función para ordenar la tabla por la columna especificada
  sortTable(column: string) {
    // Si se hace clic en la misma columna, cambiar la dirección del ordenamiento
    if (column === this.sortColumn) {
      this.toggleSortDirection();
    } else {
      // Si se hace clic en una columna diferente, ordenar en orden ascendente
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    // Ordenar la tabla utilizando la columna y la dirección del ordenamiento
    this.solicitudes = this.solicitudes.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
      const columnA = a[column];
      const columnB = b[column];

      if (columnA < columnB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (columnA > columnB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  solicitudes: any = [];
  solicitudes_aprobadas : any = [];
  solicitudes_rechazadas : any = [];
  solicitudes_pendientes : any = [];
  cambiarEstado(solicitud: Detalle, nuevoEstado: 'Rechazado' | 'Aprobado' | 'Pendiente'| 'Enviado') {
    solicitud.estado = nuevoEstado;
  }
  verDetalle(solicitud: Solicitud, verDetalle:'Ver Detalle '){
    solicitud.referencia = verDetalle;
  }
  getEstadoClass(estado : String): String{
    switch (estado) {
      case '1':
        return 'estado-aprobado';
      case 'Rechazado':
        return 'estado-rechazado';
      case '2':
        return 'estado-pendiente';
      case  '0':
        return 'estado-enviado';
      default:
        return 'black';
    }
  }

  openDialog(solicitudId: bigint){
    const dialogRef = this.dialog2.open(ViewPostsComponent,{
      width: '50vw',
      height: '50vh',
      // maxHeight: '80vh', // Aquí estableces la altura máxima
      // overflowY: 'auto' // Agrega scroll cuando sea necesario
    });
    const instance = dialogRef.componentInstance
    if(instance){
      instance.solicitudId = solicitudId
      console.log(instance.solicitudId)
    }
  }

  obtenerFecha1(timestamp: Date): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
   // return `${year}-${month}-${day}`;
    return `${day}-${month}-${year}`;
  }

  /*getAudiencia(id : bigint):any {
      this.panelService.GetAudiencia(id)
      .subscribe(Response => {
      this.solicitudes = Response
      console.log(this.solicitudes)
   });
  }*/

  filtrar(filtro: number) {
    this.sortTable('solicitudid');
    console.log("El filtro es:", filtro);
    if (filtro == 1)
    {
      this.solicitudes = this.solicitudes_aprobadas
    }
    if (filtro == 2)
    {
      this.solicitudes = this.solicitudes_rechazadas
    }
    if (filtro == 0)
    {
      this.solicitudes = this.solicitudes_pendientes
    }
    /*this.panelService.GetSolicitud().subscribe(Response => {
      // Filtrar las solicitudes según el estado seleccionado
      this.solicitudes = this.solicitudes.filter((solicitud: { estado: number; }) => solicitud.estado === filtro);
      console.log(this.solicitudes);
    });*/
  }

  // Filtrar las solicitudes según el rango de fechas seleccionado
  filtrarPorFechasSolicitud() {
    if (this.selectedStartDate && this.selectedEndDate) {
      console.log("uwu",this.selectedStartDate, this.selectedEndDate);
      //this.solicitudes = this.solicitudes.filter((solicitud: { fecha_solicitud: Date; }) => solicitud.fecha_solicitud >= this.selectedStartDate && solicitud.fecha_solicitud <= this.selectedEndDate);
      this.solicitudes = this.solicitudes.filter((solicitud: any) => {
        const fechaSolicitud = new Date(solicitud.fecha_solicitud);
        console.log("agh",fechaSolicitud, this.selectedStartDate, this.selectedEndDate);
        return fechaSolicitud >= this.selectedStartDate && fechaSolicitud <= this.selectedEndDate;
      });
    }
  }

  filtrarPorFechasRevisado() {
    if (this.selectedStartDate && this.selectedEndDate) {
      console.log("jjj",this.selectedStartDate, this.selectedEndDate);
      //this.solicitudes = this.solicitudes.filter((solicitud: { fecha_solicitud: Date; }) => solicitud.fecha_solicitud >= this.selectedStartDate && solicitud.fecha_solicitud <= this.selectedEndDate);
      this.solicitudes = this.solicitudes.filter((solicitud: any) => {
        const fechaRevisado = new Date(solicitud.fecha_revisado);
        console.log("aaaa",fechaRevisado, this.selectedStartDate, this.selectedEndDate);
        return fechaRevisado >= this.selectedStartDate && fechaRevisado <= this.selectedEndDate;
      });
    }
  }








}

