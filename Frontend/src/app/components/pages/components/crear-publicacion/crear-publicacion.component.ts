import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CrearPublicacion1Component } from '../crear-publicacion1/crear-publicacion1.component';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css'],
})
export class CrearPublicacionComponent implements OnInit {
  foto: any;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CrearPublicacionComponent>
  ) {}

  ngOnInit(): void {}

  dropHandler(event: any) {
    event.preventDefault();


  }

  onFileSelected(event: any): boolean {
    if (event.target.files[0]) {
      const archivoCapturado = event.target.files[0];
      this.foto = archivoCapturado;

      console.log(this.foto);

      const dialogRef = this.dialog.open(CrearPublicacion1Component, {
        disableClose: false,
        data: { foto: this.foto },
      });

      this.dialogRef.close();

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        console.log(result);
      });

      return true;
    } else {
      return false;
    }
  }
}
