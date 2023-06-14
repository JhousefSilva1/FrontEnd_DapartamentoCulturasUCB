import { PreviewService } from 'src/app/services/preview.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-select-post',
  templateUrl: './select-post.component.html',
  styleUrls: ['./select-post.component.css']
})
export class SelectPostComponent implements OnInit {
  constructor(public dialog: MatDialog, private previewService: PreviewService) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  preview: any = []

  ngOnInit(): void {
    const id1:any = localStorage.getItem('id');
    console.log('El componente se ha inicializado');
    this.previewService.getById(id1)
    .subscribe(Response => {
      console.log(Response);
      this.preview = Response
   });
  }
}
export class DialogContentExampleDialog {}
