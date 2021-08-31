import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";




@Component({
  selector: 'app-actualizar-video',
  templateUrl: './actualizar-video.component.html',
  styleUrls: ['./actualizar-video.component.css']
})
export class ActualizarVideoComponent implements OnInit {

  objectConsultado: any;
  constructor(public dialogRef: MatDialogRef<ActualizarVideoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any)  {
    this.ConsultaInfo(this.data.id)
  }

  ngOnInit(): void {}

  ConsultaInfo(id: number){
     switch (this.data.titulo) {
       case "Editar video":
         this.objectConsultado = {
           url: "Prueba url",
           id: this.data.id,
           nombre: "Prueba nombre"
         }
         break;
     }
  }

}
