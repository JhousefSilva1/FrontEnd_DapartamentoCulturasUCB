import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentifacionService } from 'src/app/shared/servicios/autentifacion.service';
declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder,private loginPrd:AutentifacionService,
    private routerprd:Router) { }
  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "158131575430-qg6mblopvs88p2cqh1c7sph2gmu34t1t.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large", buttonClass: "google-login-btn"  }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  ngOnInit(): void {
    console.log("se encuentra2");
    console.log(this.routerprd);
    this.myForm = this.createMyForm();
    
      
  
  }


  handleCredentialResponse(response:any){
    console.log(response);
    console.log(this.routerprd);
    if(response.credential){
      sessionStorage.setItem("token",response.credential);
      document.location.href = "/sesion/principal";
    }
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',Validators.required]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
        Object.values(this.myForm.controls).forEach(control=>{
          control.markAllAsTouched();
        });
        return;
    }

     if(!this.loginPrd.ingresarAplicativo(this.myForm.value)){
          alert("Usuario o contraseña invalido");
     }else{
        this.routerprd.navigateByUrl("/sesion/principal");
     }
  }

  public get f():any{
    return this.myForm.controls;
  }

}
