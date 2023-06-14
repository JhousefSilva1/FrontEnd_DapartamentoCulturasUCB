import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms'; // importa FormsModule
import { AppComponent } from './app.component';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PanelComponent } from './components/panel/panel.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { ViewPostsComponent } from './components/panel/view-posts/view-posts.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { SesionComponent } from './layout/publico/sesion/sesion.component';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';
import { EdProfileComponent } from './components/ed-profile/ed-profile.component';
import { SelectInterestComponent } from './components/edit-profile/select-interest/select-interest.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from "ngx-pagination";

import { DataService } from './core/data.service';

import { SelectPostComponent } from './components/select-post/select-post.component';
import { RecommendedPostComponent } from './components/recommended-post/recommended-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {ModifyPostComponent} from "./components/panel/view-posts/modify-post/modify-post.component";
import { ModalInterestComponent } from './components/ed-profile/modal-interest/modal-interest.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MispublicacionesComponent} from "./components/mispublicaciones/mispublicaciones.component";
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DescriptionComponent } from './components/description/description.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPostsComponent,
    PanelComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    AddEventsComponent,
    ViewPostsComponent,
    ImageSliderComponent,
    SesionComponent,
    ContenidoComponent,
    SelectInterestComponent,
    SelectPostComponent,
    RecommendedPostComponent,
    ModifyPostComponent,
    EdProfileComponent,
    ModalInterestComponent,
    UserViewComponent,
    ProfileComponent,
    MispublicacionesComponent,
    DescriptionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    MatSnackBarModule,
    NgxPaginationModule,
    NgbModule,
    NgxDaterangepickerMd.forRoot(),
    BsDatepickerModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
  ],


  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
