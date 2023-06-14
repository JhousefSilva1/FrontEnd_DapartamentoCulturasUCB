import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  rows: string[][] = [];
  selected: boolean[][] = [];
  dialog: any;

  constructor() {
    this.rows = [
      ['Opción 1', 'Opción 2', 'Opción 3'],
      ['Opción 4', 'Opción 5', 'Opción 6'],
      // ...
    ];

    this.selected = this.rows.map(row => Array(row.length).fill(false));


  }

  onCheckboxChange(rowIdx: number, optionIdx: number) {
    this.selected[rowIdx][optionIdx] = !this.selected[rowIdx][optionIdx];
  }
  submitOptions() {
    // Aquí puedes realizar las acciones necesarias con las opciones seleccionadas
    console.log(this.selected);
  }




  opcionPadre!: string;
  opcionPadres: string[] = ['Ingenierias', 'Ciencias Economicas', 'Ciencias Sociales', 'Diseño y Comunicacion Visual', 'Ciencias Politicas'];

  opcionHijo!: string;
  opcionesHijo: string[] = [];

  onSeleccionarOpcionPadre() {
    if (this.opcionPadre === 'Ingenierias') {
      this.opcionesHijo = ['Ingenieria Ambiental', 'Ingenieria Biomedica', 'Ingenieria Bioquimica y Bioporcesos',
                           'Ingenieria Civil', 'Ingenieria en Energia', 'Ingenieriaen Logistica y analisis de cadenas de suministros',
                           'Ingenieria en multimedia e interactividad Digital', 'Ingenieria Industrial',
                           'Ingenieria Quimica', 'Ingenieria Mecatronica','Ingenieria en Sistemas', 'Ingenieria en Telecomunicaciones'
                          ];
    }  else if (this.opcionPadre === 'Ciencias Economicas') {
      this.opcionesHijo = ['Administracion de Empresas', 'Administracion Turistica', 'Contaduria Publica',
                          'Economia', 'Economia  e inteligencia de negocios', 'Ingenieria en innovacion empresarial',
                          'Ingenieria Comercial','Marketing y Medios Digitales'
                          ];
    } else if(this.opcionPadre == 'Ciencias Sociales'){
      this.opcionesHijo = ['Comunicacion Social', 'Filosofia y Letras', 'Psicologia', 'Psicopedagogia'];
    }
    else if(this.opcionPadre == 'Diseño y Comunicacion Visual'){
      this.opcionesHijo = ['Arquitectura', 'Arquitectura de Interiores', 'Diseño Digital', 'Diseño gráfico y Comunicacion Visual'];
    }
    else if(this.opcionPadre == 'Ciencias Politicas'){
      this.opcionesHijo = ['Ciencias Politicas y relaciones internacionales', 'Derecho'];
    }
    else {
      this.opcionesHijo = [];
    }

    // Restablecer la opción seleccionada en el combo box hijo
    this.opcionHijo = '';

  }
  //opcion hija



  onSeleccionarOpcionHijo() {
    console.log('Opción seleccionada:', this.opcionHijo);
  }
}
