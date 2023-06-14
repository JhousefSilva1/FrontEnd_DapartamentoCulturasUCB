import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombreCompleto: string="";
  correoElectronico: string="";
  telefono: string="";
  mensaje: string="";
  enviarMensaje() {
    // lógica para enviar el mensaje
    console.log('Mensaje enviado');
  }


}
