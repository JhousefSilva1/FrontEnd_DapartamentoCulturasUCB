import { Component, OnInit } from '@angular/core';
import { AutentifacionService } from 'src/app/shared/servicios/autentifacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  images = [
    'https://www.ucb.edu.bo/wp-content/uploads/2023/02/BANNER-WEB-copia.jpg',
    'https://lpz.ucb.edu.bo/wp-content/uploads/2023/01/ucb-inscripciones-bienvenida-webucb-1.jpg',
    'https://www.ucb.edu.bo/wp-content/uploads/2021/05/Web-NacionalMesa-de-trabajo-1-1.jpg',
    'https://lpz.ucb.edu.bo/wp-content/uploads/2022/12/ucb-inscripciones-6-estudiamos-webucb-1.jpg',
    'https://lpz.ucb.edu.bo/wp-content/uploads/2022/12/ucb-inscripciones-7-podemos-webucb-1.jpg',
    'https://lpz.ucb.edu.bo/wp-content/uploads/2023/02/ucb-inscripciones-tu-lugar-webucb-c.jpg',
    'https://portal.scz.ucb.edu.bo/public/Imagenes/General/pagina/guirapida.jpg',
    'https://pbs.twimg.com/media/Fm2CkOsWYAEV_kp.jpg',
    'https://pbs.twimg.com/media/FkY1cN0WIAIdfYn.jpg',
    'https://portal.scz.ucb.edu.bo/public/Imagenes/General/pagina/guirapida.jpg',
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? (this.images.length - 1) : (this.currentSlide - 1);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.images.length - 1) ? 0 : (this.currentSlide + 1);
  }


  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }



  sliderConfig = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true
  };

  constructor(private aut:AutentifacionService,private router:Router) { }

  public cerrarSesion(){
    this.aut.limpiarToken();
    this.router.navigateByUrl("/sinsesion/login");
}


}
