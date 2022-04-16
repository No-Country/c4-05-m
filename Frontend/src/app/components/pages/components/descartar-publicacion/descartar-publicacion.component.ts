import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-descartar-publicacion',
  templateUrl: './descartar-publicacion.component.html',
  styleUrls: ['./descartar-publicacion.component.css']
})
export class DescartarPublicacionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DescartarPublicacionComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

  descartar() {
    this.dialog.closeAll();
  }
}
