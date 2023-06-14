import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentifacionService } from 'src/app/shared/servicios/autentifacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PermisosRutasService implements CanActivate {

  constructor(private router:Router,private autenticacionPrd:AutentifacionService,private snackBar: MatSnackBar ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!Boolean(this.autenticacionPrd.getAutenticationByToken())){
      this.snackBar.open('Debe iniciar sesión para acceder a esta página', 'Cerrar', {
        duration: 5000 // Duración del mensaje en ms
      });
      return this.router.parseUrl("/sinsesion/login");
    }
    return Boolean(this.autenticacionPrd.getAutenticationByToken());
  }

}
