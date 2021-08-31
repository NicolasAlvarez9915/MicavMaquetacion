import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {faXRay} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dialog-desicion',
  templateUrl: './dialog-desicion.component.html',
  styleUrls: ['./dialog-desicion.component.css']
})
export class DialogDesicionComponent implements OnInit {
  faX = faSquare;
  constructor(public dialogRef: MatDialogRef<DialogDesicionComponent>,
              @Inject(MAT_DIALOG_DATA) public texto) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
