import {Component, Inject, OnInit} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-crear-tutorial-documento',
  templateUrl: './crear-tutorial-documento.component.html',
  styleUrls: ['./crear-tutorial-documento.component.css']
})
export class CrearTutorialDocumentoComponent implements OnInit {
  faPlus = faPlus;

  constructor(public dialogRef: MatDialogRef<CrearTutorialDocumentoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  capturarEvento(ev)
  {
    switch (ev.type){
      case 'change':
        this.change(ev);
        break
      case 'drop':
        this.drop(ev);
        break
      default:
        return;
    }
  }

  drop(event){
    event.preventDefault();
    console.log(event.dataTransfer.files[0]);
  }

  change(event)
  {
    console.log(event.target.files[0]);
    event.target.value = "";
  }

  permitirDrop(ev)
  {
    ev.preventDefault();
  }


}
