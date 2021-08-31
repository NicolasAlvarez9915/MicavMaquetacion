import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TutorialesComponent} from "./tutoriales/tutoriales.component";
import {DecomuentosComponent} from "./decomuentos/decomuentos.component";

const routes: Routes = [
  { path: 'Tutoriales', component: TutorialesComponent},
  { path: 'Documentos', component: DecomuentosComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ]
})
export class AppRoutingModule { }
