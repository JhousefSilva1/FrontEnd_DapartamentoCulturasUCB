import { Component } from '@angular/core';
import { PanelService } from 'src/app/services/panel.service';
import { PreviewService } from 'src/app/services/preview.service';
import { OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { FileSend } from 'src/app/models/file';
import { ModificacionPubliService } from 'src/app/services/modificacion-publi.service';

@Component({
  selector: 'app-mispublicaciones',
  templateUrl: './mispublicaciones.component.html',
  styleUrls: ['./mispublicaciones.component.css']
})
export class MispublicacionesComponent implements OnInit {
  publicaciones: any = [];
  titulo: string = "";
  subtitulo: string = "";
  descripcion: string = "";
  selectedModality: string= "";
  selectedScope: string = "";
  publi: any = [];

  category: Category[]=[];
  categoryaux: Category[]=[];

  categoryaux2: any[]=[];
  publicoAux!:string;
  lldata!: string;

  image!:any;
  file!:FileSend;
  cardImageBase64!: string;

  imageid!:string;

  constructor(private panelService: PanelService, private previewService: PreviewService, private modificacionService: ModificacionPubliService) { }

  ngOnInit(): void {
    this.panelService.GetSolicitud().subscribe(Response => {
      this.publicaciones = Response;
      console.log(this.publicaciones);
    });
  }
  publicacionSeleccionada: any;
  modalVisible: boolean = false;

  abrirModal(publicacionid: bigint) {
    this.previewService.getById(publicacionid).subscribe(Response => {
    this.publi = Response;
    console.log(this.publi);
    });
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  mostrarRangosEdad() {
    const edadSeleccionada = this.publicacionSeleccionada.edad;

    // Reiniciar los valores de los checkbox
    this.publicacionSeleccionada.checkbox1 = false;
    this.publicacionSeleccionada.checkbox2 = false;
    this.publicacionSeleccionada.checkbox3 = false;

    // Lógica para mostrar/ocultar los checkbox según la edad seleccionada
    if (edadSeleccionada === '16-30') {
      // Mostrar el checkbox 1
      this.publicacionSeleccionada.mostrarCheckbox1 = true;
    } else {
      // Ocultar el checkbox 1
      this.publicacionSeleccionada.mostrarCheckbox1 = false;
    }

    if (edadSeleccionada === '31-60') {
      // Mostrar el checkbox 2
      this.publicacionSeleccionada.mostrarCheckbox2 = true;
    } else {
      // Ocultar el checkbox 2
      this.publicacionSeleccionada.mostrarCheckbox2 = false;
    }

    if (edadSeleccionada === '61+') {
      // Mostrar el checkbox 3
      this.publicacionSeleccionada.mostrarCheckbox3 = true;
    } else {
      // Ocultar el checkbox 3
      this.publicacionSeleccionada.mostrarCheckbox3 = false;
    }
  }

  obtenerFecha1(timestamp: Date): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  guardarCambios() {
    const titulo = this.publicacionSeleccionada.titulo;

    this.modificacionService.putPublicacion(titulo).subscribe(Response => {
      console.log(Response);
      this.modalVisible = false;
    });
  }
}
