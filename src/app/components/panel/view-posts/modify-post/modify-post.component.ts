import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import './modify-post.component.css';
import { PreviewService } from 'src/app/services/preview.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-modify-post',
  templateUrl: './modify-post.component.html',
  styleUrls: ['./modify-post.component.css']
})
export class ModifyPostComponent implements OnInit {

  @Input() solicitudId!: bigint;
  preview: any = [];
  date!:Date;
  comentario: string = '';

  constructor(private previewService: PreviewService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const solicitudId = this.solicitudId;
    const comentario = form.value.comentario;
    //const date = this.date;

    this.previewService.updatePost(solicitudId, comentario)
      .subscribe({
        next: (response) => {
          console.log('La solicitud se ha enviado correctamente:', response);
          this.activeModal.close();
        },
        error: (errorResponse) => {
          console.log('Ha ocurrido un error al enviar la solicitud:', errorResponse);
        }
      });
    Swal.fire({
      icon: 'success',
      title: 'Solicitud Enviada!',
      text: 'Los datos del formulario han sido enviados con éxito.'
    });
    this.activeModal.close();
  }

  closeModal(): void {
    this.activeModal.close();
  }

}
