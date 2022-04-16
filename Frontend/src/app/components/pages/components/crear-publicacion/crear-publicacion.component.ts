import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CrearPublicacion1Component } from '../crear-publicacion1/crear-publicacion1.component';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css'],
})
export class CrearPublicacionComponent implements OnInit {
  foto: File[] = [];

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CrearPublicacionComponent>
  ) {}

  ngOnInit(): void {}

  onSelect(event: any) {
    console.log(event);
    if (this.foto.length > 1) {
      this.foto = [];
    }
    this.foto.push(...event.addedFiles);
    console.log(this.foto);

    this.openDialog();
  }

  onRemove(event: any) {
    console.log(event);

    this.foto.splice(this.foto.indexOf(event), 1);
  }

  onFileSelected(event: any): boolean {

    if (this.foto.length > 1) {
      this.foto = [];
    }

    if (event.target.files[0]) {
      const archivoCapturado = event.target.files[0];
      this.foto = archivoCapturado;

      console.log(this.foto);

      this.openDialog();

      return true;
    } else {
      return false;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CrearPublicacion1Component, {
      disableClose: false,
      data: { foto: this.foto[0] },
    });

    this.dialogRef.close();

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
