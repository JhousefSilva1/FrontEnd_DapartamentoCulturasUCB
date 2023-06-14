import { Component } from '@angular/core';

export interface TableElement {
  title: string;
  position: number;
  tipo: string;
  fechaSolicitud: Date;
  fechaUltimaRevicion: Date;
  estado: string;
  comentario: string;
}

const ELEMENT_DATA: TableElement[] = [
  {position: 1, title: 'Creative Planning ', tipo: "Evento", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 2, 27),estado: "Rechazado", comentario:"Cambiar la Imagen"},
  {position: 2, title: 'Big E Season Memories ', tipo: "Evento", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 2, 27),estado: "Pendiente",comentario:""},
  {position: 3, title: 'Spring Now ', tipo: "Publicacion", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 7, 12),estado: "Aceptado",comentario:""},
  {position: 4, title: 'Pomp It Mountain ', tipo: "Publicacion", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 2, 27),estado: "Rechazado",comentario:"Publicacion mal escrita, cambiar el primer parrafo"},
  {position: 5, title: 'Occasions Reasons ', tipo: "Evento", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 5, 27),estado: "Aceptado",comentario:""},
];

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  displayedColumns: string[] = ['position', 'title', 'tipo', 'fechaSolicitud', 'fechaUltimaRevicion', 'estado', 'comentario'];
  dataSource = ELEMENT_DATA;

  obtenerFecha(fecha: Date): string {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  }

}

