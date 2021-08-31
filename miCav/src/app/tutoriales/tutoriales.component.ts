import {Component, OnInit} from '@angular/core';
import {faFilm, faPen, faPlay, faPlus, faStar, faTrash} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from "@angular/material/dialog";
import {DecomuentosComponent} from "../decomuentos/decomuentos.component";
import {CrearTutorialDocumentoComponent} from "../crear-tutorial-documento/crear-tutorial-documento.component";
import {DialogDesicionComponent} from "../dialog-desicion/dialog-desicion.component";
import {ActualizarVideoComponent} from "../actualizar-video/actualizar-video.component";

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.css']
})
export class TutorialesComponent implements OnInit {
  faFilm = faFilm;
  faStar = faStar;
  faPlay = faPlay;
  faPen = faPen;
  faTrash = faTrash;
  faPlus = faPlus;

  url: string;
  classCss: {};

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.url = this.getThumb("https://www.youtube.com/watch?v=Vd4dlo7wOUQ");
  }

  getThumb(url) {
    var video, results, thumburl;

    if (url === null) {
      return '';
    }

    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    thumburl = 'http://img.youtube.com/vi/' + video + '/mqdefault.jpg';
    this.classCss = {
      backgroundImage: 'url(' + thumburl + ')',
    };
    return thumburl;
  }

  openDialog(component: string, info: string) {
    let dialogRef;

    switch (component){
      case "Eliminar":
        dialogRef = this.dialog.open(DialogDesicionComponent, {
          width: '250px',
          data: "¿Seguro de que desea eliminar el video '" + info + "'?"
        });
       break;
      case "Crear":
        dialogRef = this.dialog.open(CrearTutorialDocumentoComponent, {
          data: "video"
        });
        break;
      case "Editar":
        dialogRef = this.dialog.open(ActualizarVideoComponent, {
          data: {titulo: "Editar video", id: info}
        });
        break;
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log('Resultado del modal: ' + result);
    });
  }


}
