import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogDesicionComponent} from "../dialog-desicion/dialog-desicion.component";
import {CrearTutorialDocumentoComponent} from "../crear-tutorial-documento/crear-tutorial-documento.component";
import {ActualizarVideoComponent} from "../actualizar-video/actualizar-video.component";
import {
  faPen,
  faPlay,
  faPlus,
  faTrash,
  faStar,
  faFileMedicalAlt,
  faFileDownload, faEdit
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-decomuentos',
  templateUrl: './decomuentos.component.html',
  styleUrls: ['./decomuentos.component.css']
})
export class DecomuentosComponent implements OnInit {

  faFileMedicalAlt = faFileMedicalAlt;
  faFileDownload = faFileDownload;
  faEdit = faEdit;
  faPen = faPen;
  faTrash = faTrash;
  faPlus = faPlus;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {}

  openDialog(component: string, info: string) {
    let dialogRef;

    switch (component){
      case "Eliminar":
        dialogRef = this.dialog.open(DialogDesicionComponent, {
          width: '250px',
          data: "¿Seguro de que desea eliminar el documento '" + info + "'?"
        });
        break;
      case "Crear":
        dialogRef = this.dialog.open(CrearTutorialDocumentoComponent, {
          data: "documento"
        });
        break;
      case "Editar":
        dialogRef = this.dialog.open(ActualizarVideoComponent, {
          data: {titulo: "Editar documento", id: info}
        });
        break;
    }
    dialogRef.afterClosed().subscribe(result => {
      console.log('Resultado del modal: ' + result);
    });
  }

  verDocumento(documento: any)
  {
    return;
  }

  descargarDocumento(documento: any)
  {
    return;
  }

}
