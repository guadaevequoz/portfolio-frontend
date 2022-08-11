import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  ContactoComponent,
  ContactoItem,
  ContactoCreate,
} from './components/contacto/contacto.component';
import {
  EducacionComponent,
  EducacionItem,
  EducacionCreate,
} from './components/educacion/educacion.component';
import { Error404Component } from './components/error404/error404.component';
import {
  ExperienciaComponent,
  ExperienciaItem,
  ExperienciaCreate,
} from './components/experiencia/experiencia.component';
import {
  HabilidadesComponent,
  HabilidadesItem,
  HabilidadesCreate,
} from './components/habilidades/habilidades.component';
import {
  LoginComponent,
  LoginDialogComponent,
} from './components/login/login.component';
import {
  ProyectosComponent,
  ProyectosItem,
  ProyectosCreate,
} from './components/proyectos/proyectos.component';
import {
  SobreMiComponent,
  SobreMiCreate,
} from './components/sobre-mi/sobre-mi.component';
import { InfoComponent } from './components/info/info.component';
import { InterceptorService } from './services/interceptor.service';
import { FlashMessagesModule } from 'flash-messages-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactoComponent,
    ContactoItem,
    ContactoCreate,
    EducacionComponent,
    EducacionItem,
    EducacionCreate,
    Error404Component,
    ExperienciaComponent,
    ExperienciaItem,
    ExperienciaCreate,
    HabilidadesComponent,
    HabilidadesItem,
    HabilidadesCreate,
    LoginComponent,
    LoginDialogComponent,
    ProyectosComponent,
    ProyectosItem,
    ProyectosCreate,
    SobreMiComponent,
    SobreMiCreate,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDialogModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      outerStrokeWidth: 16,
      outerStrokeColor: '#FA58B6',
      showSubtitle: false,
      showInnerStroke: false,
      showUnits: false,
      showImage: true,
      imageHeight: 45,
      imageWidth: 45,
      lazy: true,
    }),
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
