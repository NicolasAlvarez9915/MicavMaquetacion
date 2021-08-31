import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { DecomuentosComponent } from './decomuentos/decomuentos.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { DialogDesicionComponent } from './dialog-desicion/dialog-desicion.component';
import { CrearTutorialDocumentoComponent } from './crear-tutorial-documento/crear-tutorial-documento.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ActualizarVideoComponent } from './actualizar-video/actualizar-video.component';



@NgModule({
  declarations: [
    AppComponent,
    TutorialesComponent,
    DecomuentosComponent,
    DialogDesicionComponent,
    CrearTutorialDocumentoComponent,
    ActualizarVideoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatMenuModule,
        MatButtonModule,
        AppRoutingModule,
        RouterModule,
        MatInputModule,
        MatIconModule,
        MatTabsModule,
        FontAwesomeModule,
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
