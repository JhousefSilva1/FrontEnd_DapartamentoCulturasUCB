import { Component } from '@angular/core';
//import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AutentifacionService } from './shared/servicios/autentifacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private loginPrd:AutentifacionService){

  }


}
